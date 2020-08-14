const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	itemNumber: {
		type: String,
		unique: true,
		required: true,
	},
	upc: {
		type: Number,
		// unique: true,
	},
	cvsNumber: {
		type: String,
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
	notes: {
		type: String,
	},
	active: {
		type: Boolean,
	},
	createdDate: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('Product', ProductSchema)
