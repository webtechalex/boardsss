require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
require('./models/User')
require('./services/passport')

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT)
