const {model, Schema} = require('mongoose')

const Contact = require('./Contact.js')(model, Schema)

module.exports = {Contact}