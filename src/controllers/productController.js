const Product = require('../models/productModel')

exports.getAllProducts = (req, res, next) => {
   Product.find()
    .then(allProducts => {
      // console.log(allProducts)
      res.status(200).json(allProducts)
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error: products not found')
    })
}

exports.getProduct = (req, res, next) => {
  Product.findOne({ itemNumber: req.query.id})
  .then(productFound => {
    console.log(productFound)
    res.status(200).json(productFound)
  })
  .catch(err => {
    console.log(err)
    res.status(404).send('Error: Product not found')
  })
}
 
exports.addProduct = (req, res, next) => {
  console.log(req)
  const newProduct = new Product({
    itemNumber: req.body.itemNumber,
    upc: req.body.upc, 
    cvsNumber: req.body.cvsNumber, 
    price: req.body.price, 
    description: req.body.description, 
    pack: req.body.pack, 
    category: req.body.category, 
    brand: req.body.brand, 
    productType: req.body.productType, 
    image: req.body.image,
    note: req.body.note,
    active: true,
    special: false
  })
  newProduct
    .save()
    .then(newProduct => {
      console.log(newProduct)
      res.status(201).json(newProduct)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error: Product not able to be added')
    })
}

exports.editProduct = (req, res, next) => {
  Product.findOne({itemNumber: req.body.itemNumber})
  .then(updatedProduct => {
    // updatedProduct.itemNumber = req.body.newItemNumber
    // updatedProduct.upc = req.body.newUpc
    // updatedProduct.cvsNumber = req.body.newCvsNumber
    updatedProduct.price = req.body.newPrice
    updatedProduct.description = req.body.newDescription
    updatedProduct.pack = req.body.newPack
    updatedProduct.category = req.body.newCategory
    updatedProduct.brand = req.body.newBrand
    updatedProduct.productType = req.body.newProductType
    updatedProduct.image = req.body.newImage
    updatedProduct.notes = req.body.newNotes
    updatedProduct.active = req.body.newActive
    updatedProduct.special = req.body.newSpecial

    return updatedProduct.save()
  })
  .then(updatedProduct => {
    res.status(200).json(updatedProduct)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('Error: could not edit Product')
  })
}

exports.deleteProduct = (req, res, next) => {
  Product.remove({itemNumber: req.body.itemNumber}).then(removedProduct => {
    res.status(200).json(removedProduct)
  })
}