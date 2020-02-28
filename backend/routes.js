var express = require('express')
const bcrypt = require('bcrypt')
const User = require('./models/User')

// Create a router object
var router = express.Router()

// Root only informs that the server is up
router.get('/', (req, res) => {
    res.send('Server up').status(200)
})

// New user registration
router.post('/register', async (req, res) => {

    let info

    try {
        // Hash password with bcrypt before saving it to the database
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(req.body.password, saltRounds)
        //saveUser(req.body.username, passwordHash)
        let newUser = new User({ username: req.body.username, password: passwordHash, score: 20 })
        let usr = await newUser.save()
        info = { username: usr.username }
    }
    catch (e) {
        console.log(`Error on registering user: ${e}`)
        info = e
    }

    res.send(info).status(200)
})

// User login
router.post('/login', async (req, res) => {

    let name
    let points
    let info

    try {
        // Find user by username
        const foundUser = await User.findOne({ username: req.body.username })
        console.log('foundUser is ', foundUser)

        if (foundUser) {

            // Compare passwords
            const passwordsMatch = await bcrypt.compare(req.body.password, foundUser.password)

            if (passwordsMatch) {
                // Get user's score
                const score = foundUser.score
                // Return username and score
                name = req.body.username
                points = score
                info = { username: name, score: points }
            }
            else {
                console.log('Wrong password')
                info = 'error: Wrong password'
            }
        }
        else {
            console.log('Wrong user credentials')
            info = 'error: Wrong user credentials'
        }
    }
    catch (e) {
        console.log(`Error on logging in user: ${e}`)
        info = e
    }
    
    // TODO: Send back user info or error if error occurred
    res.send(info).status(200)
})

// Catch requests to all routes that won't be served
router.all('*', (req, res) => {
    res.send('Page not found').status(404)
})

module.exports = router
