const mongoose = require('mongoose')

// Define click Schema. Click will only have and id
let clickSchema = new mongoose.Schema({
})

// Compile schema to model
const Click = mongoose.model('Click', clickSchema)

module.exports = Click
