const express = require('express')
const router = express.Router()

const User = require('../models/userModel')
const userController = require('../controllers/userController')

// get all users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:email', async (req, res) => {
  try {
    const foundUser = await User.findOne({email: req.query.id})
    res.status(200).json(foundUser)
  } catch (err) {
    res.json({ message: err })
  }
})

router.delete('/delete-user/:id', async (req, res) => {
  try {
    const deletedUser = await User.remove({ _id: req.params.id })
    res.status(200).json(deletedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

router.put('/edit-user', userController.editUser)

// router.put('/edit-user/', async (req, res) => {
//   try {
//     const updatedUser = await User.updateOne(
//       { email: req.body.email },
//       // { $set: { email: req.body.email } }
//     )
//     res.json(updatedUser)
//   } catch (err) {
//     res.json({ message: err })
//   }
// })

router.post('/add-user', async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    notes: req.body.notes,
    active: true
  })

  try {
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
