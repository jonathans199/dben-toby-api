const mongoose = require('mongoose')

const UserTypeSchema = new mongoose.Schema({
  userType: {
    type: String,
    unique: true,
  },
})

mongoose.model('UserType', UserTypeSchema)