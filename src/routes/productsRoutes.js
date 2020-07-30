const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/', productController.getAllProducts)

router.get('/get-product', productController.getProduct)

router.post('/add-product', productController.addProduct)

router.put('/edit-product', productController.editProduct)

router.delete('/delete-product', productController.deleteProduct)

module.exports = router