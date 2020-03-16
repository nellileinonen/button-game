const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')
const User = require('./models/User')
const Click = require('./models/Click')

const app = express()
const server = http.Server(app)
const io = require('socket.io')(server)

// Define the port that the server will listen
const port = process.env.PORT || 8000

// Configure dotenv that loads the environment variables from a .env file
dotenv.config()

// Enable CORS. ! However, enabling all is problematic for the security! !
app.use(cors())

// Use body parser to get info on request body
app.use(bodyParser.json())

// App on Heroku: use build version of React app
app.use(express.static('build'))

// Use the router module
app.use('/', router)


/* Database connection */

// Connect to the database. Database connection URI is fetched from .env file
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  // Because of Heroku: set false because causes errors when true
  useUnifiedTopology: false
})

const db = mongoose.connection

db.on('error', (err) => {
    console.log(`There was an error in Mongoose connection: ${err}`)
})

db.once('open', async () => {
    console.log('Connected to the database')
})


/* Database handling helper functions */

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

        // On every game button push, new click and user score are saved to the database
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

        // On restart after game over, user's score is returned to 20 points
        if (action.type === 'server/RESTORE_SCORE') {
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
