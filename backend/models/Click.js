'use strict'

const mongoose = require('mongoose')

let counterSchema = new mongoose.Schema({
})

// Compile schema to model
const Click = mongoose.model('Click', counterSchema)

module.exports = Click
