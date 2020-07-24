const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Getting All users')
})

router.get('/user', (req, res) => {
  res.send('Getting one user')
})

module.exports = router