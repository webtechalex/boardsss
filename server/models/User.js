const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
  userid: String
})

mongoose.model('Users', userSchema)