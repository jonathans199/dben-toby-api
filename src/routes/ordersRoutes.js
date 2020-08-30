const express = require('express')
const router = express.Router()

const authorization = require('../middlewares/requireAuth')
const orderController = require('../controllers/orderController')

router.get('/', authorization, orderController.getAllOrders)

router.get('/:orderNumber', authorization, orderController.getOrder)

router.post('/add-order', authorization, orderController.addOrder)

router.put('/edit-order', authorization, orderController.editOrder)

// router.delete('/delete-order', orderController.deleteOrder)

module.exports = router
