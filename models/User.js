const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

// Besause the uniqueValidator caused "collection.ensureIndex is deprecated" error
// createIndexes is used instead of that 
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

// Apply the unique validator plugin to userSchema
userSchema.plugin(uniqueValidator)

// Compile schema to model
const User = mongoose.model('User', userSchema)

module.exports = User
