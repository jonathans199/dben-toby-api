const express = require('express')
const router = express.Router()

const Product = require('../models/productModel')

router.get('/', (req, res) => {
  const allProducts = Product.find()
  res.json(allProducts)
})


module.exports = router