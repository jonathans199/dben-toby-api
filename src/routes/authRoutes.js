const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Store = mongoose.model('Store')

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = new User({ email, password })

    await user.save()
    res.send('you made a post request')
  } catch (err) {
    return res.status(422).send(err.message)
  }
})

router.post('/newStore', async (req, res) => {
  const { storeId, storeAddress } = req.body

  try {
    const store 
  }

})

module.exports = router
