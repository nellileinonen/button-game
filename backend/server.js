const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const app = express()
const server = http.Server(app);
const io = require('socket.io')(server);

const User = require('./models/User')
const Click = require('./models/Click')

const port = process.env.PORT || 8000

// Configure dotenv
dotenv.config()

// Allow cors
app.use(cors())

// Use body parser to get info on request body
app.use(bodyParser.json())


/* Database connection */

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(`There was an error in Mongoose connection: ${err}`)
})

db.once('open', async () => {
    console.log('Connected to the database')
})


/* Database handling functions */

// Function to count clicks on the database. Returns the amount of clicks
const countClicks = async () => {
    const clicks = await Click.countDocuments({}, (err, clicks) => {
        if (err) {
            console.log(`Could not count clicks: ${err}`)
        }
        return clicks
    })
    return clicks
}

// Function to save a new click to the database
const saveClick = async () => {
    let newClick = new Click({})
    await newClick.save()
}

// Function to save a new user to the database
const saveUser = async (name, pwd) => {
    let newUser = new User({ username: name, password: pwd, score: 20 })
    await newUser.save()
}

// Function to update user's score in the database
const updateScore = async (name, scr) => {
    // Find user by username and update score
    await User.findOneAndUpdate({ username: name }, { score: scr }, (err) => {
        if (err) {
            console.log(`Error when updating user's score: ${err}`)
        }
    })
}


/* Socket.io connection */

// Event listener on connection with client
io.on('connect', async (socket) => {
    console.log('User connected')

    // Get the amount of all clicks in the database and send the info to the user when 
    // the game is opened
    let clicksInDB = await countClicks()
    socket.emit('action', { type: 'server/ALL_CLICKS', allClicks: clicksInDB })

    // Listen on new clicks coming from the client
    socket.on('action', (action) => {

        // On every game button push, new click ans user score are saved to the database
        if (
        action.type === 'server/PUSH' ||
        action.type === 'server/PUSH_4_POINTS' || 
        action.type === 'server/PUSH_39_POINTS' ||
        action.type === 'server/PUSH_249_POINTS' ||
        action.type === 'server/PUSH_20_POINTS'
        ) {
            console.log('Got push to server')
            // Save click to the database
            saveClick()
            // Add the new push to the Redux store of every other player also
            socket.broadcast.emit('action', { type: 'server/ADD_CLICK' })
            // Save score to the database
            console.log(`For ${action.data.username} put score ${action.data.score}`)
            updateScore(action.data.username, action.data.score)
        }
    })

    socket.on('disconnect', () => {
        console.log(`User with socket id ${socket.id} disconnected`)
    })
})


/* Server running */

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

/* Routes */

app.get('/', (req, res) => {
    res.send('Server up').status(200)
})



// New user registration
app.post('/register', async (req, res) => {

    try {
        // Hash password with bcrypt before saving it to the database
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
        saveUser(req.body.username, passwordHash)
    }
    catch (exception) {
        console.log(`Error on registering user: ${exception}`)
    }
    
    // TODO: Send back user info or error if error occurred
    res.send().status(200)
})



// User login
app.post('/login', async (req, res) => {

    let name
    let points

    try {
        // Find user by username
        const foundUser = await User.findOne({ username: req.body.username })

        if (foundUser) {

            // Compare passwords
            const passwordsMatch = await bcrypt.compare(req.body.password, foundUser.password)
            
            if (passwordsMatch) {
                // Get score
                const score = foundUser.score
                // Return username and score
                name = req.body.username
                points = score
            }
            else {
                console.log('Wrong password')
            }
        }
        else {
            console.log('Wrong user credentials')
        }

    }
    catch (exception) {
        console.log(`Error on logging in user: ${exception}`)
    }
    
    // TODO: Send back user info or error if error occurred
    res.send({ username: name, score: points }).status(200)
})