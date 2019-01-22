require('dotenv').config()
require('./services/passport')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT)
