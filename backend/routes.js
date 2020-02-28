var express = require('express')
const bcrypt = require('bcrypt')

// Create a router object
var router = express.Router()

// Root only informs that the server is up
router.get('/', (req, res) => {
    res.send('Server up').status(200)
})

// New user registration
router.post('/register', async (req, res) => {

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
router.post('/login', async (req, res) => {

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

// Catch requests to all routes that won't be served
router.all('*', (req, res) => {
    res.send('Page not found').status(404)
})

module.exports = router
