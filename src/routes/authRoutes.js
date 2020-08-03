const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')


router.post('/signin', authController.signin)

// router logout
// router.post('/logout', authController.logout)


module.exports = router
