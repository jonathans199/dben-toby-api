const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
	{
		orderNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		user: {
			type: String,
			required: true,
		},
		store: {
			type: String,
			required: true,
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
		products: {
			type: Array,
		},
		signature: {
			type: String,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
