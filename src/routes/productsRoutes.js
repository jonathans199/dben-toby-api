const express = require('express')
const router = express.Router()

const authorization = require('../middlewares/requireAuth')
const productController = require('../controllers/productController')

router.get('/', authorization, productController.getAllProducts)

router.get('/:itemNumber', authorization, productController.getProduct)

router.post('/add-product', authorization, productController.addProduct)

router.put('/edit-product', authorization, productController.editProduct)

router.delete('/delete-product', authorization, productController.deleteProduct)

module.exports = router