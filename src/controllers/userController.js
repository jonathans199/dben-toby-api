const User = require('../models/userModel')

exports.editUser = (req, res ) => {
  User.findOne({email: req.body.email})
  .then(updatedUser => {
    updatedUser.email = req.body.newEmail
    updatedUser.firstName = req.body.newFirstName
    updatedUser.lastName = req.body.newLastName
    updatedUser.userType = req.body.newUserType
    updatedUser.notes = req.body.newNotes
    updatedUser.active = req.body.newActive
    // updatedUser.password = req.body.newPassword
    return updatedUser.save()
  })
  .then(updatedUser => {
    res.status(200).json(updatedUser)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('Error: could not edit User')
  })
}