const Order = require('../models/orderModel')

exports.addOrder = (req, res, next) => {
	const newOrder = new Order({
		user: req.body.user,
		products: req.body.products,
		storeSoldTo: req.body.storeSoldTo,
		date: req.body.date,
		orderPoNumber: req.body.orderPoNumber,
		unitsDelivered: req.body.unitsDelivered,
		casesDelivered: req.body.casesDelivered,
		totalInvoice: req.body.totalInvoice,
		terms: req.body.terms,
		receivedBy: req.body.receivedBy,
		notes: req.body.notes,
	})
	newOrder
		.save()
		.then(newOrder => {
			console.log(newOrder)
			res.status(201).json(newOrder)
		})
		.catch(err => {
			console.log(err)
			res.status(500).send(' Error: Store not added ')
		})
}

// s

// exports.editStore = (req, res, next) => {
//   Store.findOne({ storeId: req.body.storeId })
//     .then(updatedStore => {
//       updatedStore.storeId = req.body.newStoreId
//       updatedStore.storeAddress = req.body.newStoreAddress
//       updatedStore.storePhone = req.body.newStorePhone
//       updatedStore.deliveryHours = req.body.newStoreHours
//       updatedStore.deliveryDays = req.body.newStoreDeliveryDays
//       updatedStore.districtManager = req.body.newDistrictManager
//       updatedStore.forklift = req.body.newForklift
//       updatedStore.notes = req.body.newNotes
//       updatedStore.contactOne = req.body.newContactOne
//       updatedStore.contactTwo = req.body.newContactTwo
//       return updatedStore.save()
//     })
//     .then(updatedStore => {
//       res.status(200).json(updatedStore)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).send('Error: could not edit Store')
//     })
// }

exports.deleteOrder = (req, res, next) => {
	Order.remove({ storeId: req.body.storeId }).then(removedOrder => {
		res.status(200).json(removedOrder)
	})
}
