const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const User = mongoose.model('Users')

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // check db for profile id
    // if not in db then save
    User.findOne({userid: profile.id})
      .then(existingUser => {
        if (!existingUser) {
          new User({userid: profile.id}).save()
        }
      })
  }
))