const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number,
  },
  user: {},
  products: [
    {
      itemNumber: {
        type: String,
        unique: true,
        required: true,
      },
      upc: {
        type: Number,
        unique: true,
        required: true,
      },
      cvsNumber: {
        type: Number,
        unique: true,
      },
      price: {
        type: Number,
      },
      description: {
        type: String,
      },
      pack: {
        type: Number,
      },
      category: {
        type: String,
      },
      brand: {
        type: String,
      },
      productType: {
        type: String,
      },
      image: {
        type: String,
      },
    },
  ],
  storeSoldTo: {
    // to store model
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderPoNumber: {
    type: String,
  },
  unitsDelivered: {
    type: Number,
  },
  casesDelivered: {
    type: Number,
  },
  totalInvoice: {
    type: String,
  },
  terms: {
    type: String,
  },
  receivedBy: {
    type: String,
  },
  notes: {
    type: m,
  },
})

module.exports = mongoose.model('OrderModel', OrderSchema)
