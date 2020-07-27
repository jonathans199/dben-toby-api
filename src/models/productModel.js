const mongoose = require ('mongoose')

const ProductSchema = new mongoose.Shema({
  itemNumber: {
    type: String,
    unique: true,
    required: true
  },
  upc: {
    type: Number,
    unique: true,
    required: true
  }, 
  cvsNumber: {
    type: Number,
    unique: true
  },
  price:{
    type: Number,
  },
  description: {
    type: String,
  }, 
  pack: {
    type: Number
  },
  category: {
    type: String
  },
  brand: {
    type: String
  },
  productType: {
    type: String
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Product', ProductSchema)