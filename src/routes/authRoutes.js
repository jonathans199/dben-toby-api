const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User')
const Store = mongoose.model('Store')
// const UserType = mongoose.model('UserType')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { email, password, userType } = req.body

  try {
    const user = new User({ email, password, userType })
    await user.save()

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).send({ error: 'Email not found' })
  }

  try {
    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token })
    console.log(token)
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' })
  }
})

router.post('/newStore', async (req, res) => {
  const { storeId, storeAddress } = req.body

  try {
    const store = new Store({ storeId, storeAddress })

    await store.save()
    res.send('new store was added')
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/newUserType', async (req, res) => {
  const { userType } = req.body

  try {
    const newUserType = new UserType({ userType })

    await newUserType.save()
    res.send('new usertype was added')
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

module.exports = router
