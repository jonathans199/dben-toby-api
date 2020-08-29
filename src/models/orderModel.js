const mongoose = require('mongoose')
const moment = require('moment')
const ProductSchema = require('./productModel')

const OrderSchema = new mongoose.Schema(
	{
		orderNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		// user: {
		//   type: mongoose.Schema.Types.ObjectId,
		//   ref: 'User'
		// },
		// store: {
		//   type: mongoose.Schema.Types.ObjectId,
		//   ref: 'Store'
		// },
		user: {
			type: String,
			required: true,
		},
		store: {
			type: String,
			required: true,
		},
		// date: {
		// 	type: Date,
		// 	default: Date.now.toDateString(),
		// },
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
		products: {
			type: Array,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
