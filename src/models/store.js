const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    unique: true,
  },
  storeAddress: {
    type: String,
  },
})

module.exports = mongoose.model('Store', StoreSchema)
