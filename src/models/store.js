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

mongoose.model('Store', StoreSchema)
