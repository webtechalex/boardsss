require('dotenv').config()
const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken) => console.log(accessToken)
))

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

const PORT = process.env.PORT || 3000
app.listen(PORT)
