'use strict'

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60
    },
    // TODO: hash password
    password: { 
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60
    },
    score: {
        type: Number,
        required: true
    }
})

// Compile schema to model
const User = mongoose.model('User', userSchema)

module.exports = User
