const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema(
	{
		storeId: {
			type: String,
			unique: true,
			required: true,
		},
		storeAddress: {
			type: String,
		},
		storePhone: {
			type: String,
		},
		deliveryHours: {
			type: String,
		},
		deliveryDays: {
			type: String,
		},
		storeManager: {
			type: String,
		},
		forklift: {
			type: Boolean,
		},
		notes: {
			type: String,
		},
		contactOne: {
			type: String,
		},
		contactTwo: {
			type: String,
		},
		class: {
			type: String,
		},
		active: {
			type: Boolean,
		},
		terms: {
			type: String,
		}
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Store', StoreSchema)
