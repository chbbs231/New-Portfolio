require ('/config')
require('dotenv').config()
const express = require('express')
const {join} = require('path')
const Port = process.env.Port || 3001

const app = express()

app.use(express.static(join(__dirname, 'client','build')))
app.use(express.urlencoded({extended: tru}))
app.use(express.json())

require('mongoose').connection.once('open', () => app.listen(PORT))