const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const http = require('http')
const server = http.Server(app);
const io = require('socket.io')(server);

const User = require('./models/User')
const Click = require('./models/Click')

const port = process.env.PORT || 8000

// Configure dotenv
dotenv.config()

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

// Function to count clicks on the database. Returns the amount of clicks
const countClicks = async () => {
    const clicks = await Click.countDocuments({}, (err, clicks) => {
        if (err) {
            console.log(`Could not count clicks: ${err}`)
        }
        console.log('CLICKS FROM DOCUMENTS ', clicks)
        return clicks
    })
    console.log(`Clicks in the database: ${clicks}`)
    return clicks
}

// Function to save a new click to the database
const saveClick = async () => {
    let newClick = new Click({})
    await newClick.save()
}

/* Socket.io connection */

// Event listener on connection with client
io.on('connect', async (socket) => {
    console.log('User connected')

    // Get the amount of all clicks in the database and send the info to the user when 
    // the game is opened
    let clicksInDB = await countClicks()
    console.log('Clicks sent to user on page reload: ', clicksInDB)
    socket.emit('action', { type: 'server/ALL_CLICKS', allClicks: clicksInDB })

    // Listen on new clicks coming from the client
    socket.on('action', (action) => {
        if (action.type === 'server/PUSH') {
            console.log('Got push to server!')
            // Save click to the database
            saveClick()
            // Add the new push to the Redux store of every other player also
            socket.broadcast.emit('action', { type: 'server/ADD_CLICK' })
        }
    })

    socket.on('disconnect', () => {
        console.log(`User with id ${socket.id} disconnected`)
    })
})

/* Server running */

server.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
})

/* Routes */

app.get('/', (req, res) => {
    res.send('Server up').status(200)
})