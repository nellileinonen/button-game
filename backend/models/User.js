const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

// uniqueValidator caused "collection.ensureIndex is deprecated" error
// so createIndexes is used instead
mongoose.set('useCreateIndex', true)

// Define user Schema. User has username, password and score, which are all required
let userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 60
    },
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

// Apply th unique validation plugin to userSchema
userSchema.plugin(uniqueValidator)

// Compile schema to model
const User = mongoose.model('User', userSchema)

module.exports = User
