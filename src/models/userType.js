const mongoose = require('mongoose')

const userTypeSchema = new mongoose.Schema({
  userType: {
    type: String,
    unique: true,
  },
})

// const UserType = mongoose.model('UserType', userTypeSchema)
// module.exports = UserType

mongoose.model('UserType', userTypeSchema)