const mongoose = require('mongoose')
const ProductSchema = require('./productModel')

const OrderSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store'
  },
  // products: [ProductSchema],
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
    type: String,
  },
})

module.exports = mongoose.model('Order', OrderSchema)
