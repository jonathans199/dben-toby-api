const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  storeId: {
    type: String,
    unique: true,
  },
  storeAddress: {
    type: String,
    unique: true,
  },
})

mongoose.model('Store', storeSchema)
