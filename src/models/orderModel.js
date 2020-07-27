const mongoose = require ('mongoose')

const OrderSchema = new mongoose.Schema({
  invoiceNumber: {
    type: Number
  },
  user: {

  },
  storeSoldTo: {
    // to store model
  },
  date: {
    type: Date,
    default: Date.now
  },
  orderPoNumber: {
    type: String
  },
  unitsDelivered: {
    type: Number
  },
  casesDelivered: {
    type: Number
  },
  totalInvoice: {
    type: String
  },
  terms: {
    type: String
  },
  receivedBy: {
    type: String
  },
  notes: {
    type: m
  }




})