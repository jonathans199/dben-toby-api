const express = require('express')
const router = express.Router()

const authorization = require('../middlewares/requireAuth')
const orderController = require('../controllers/orderController')

router.get('/', orderController.getAllOrders)

router.get('/:orderNumber', orderController.getOrder)

router.post('/add-order', orderController.addOrder)

router.put('/edit-order', orderController.editOrder)

// router.delete('/delete-order', orderController.deleteOrder)

module.exports = router
