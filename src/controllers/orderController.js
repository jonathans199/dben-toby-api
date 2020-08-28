const Order = require('../models/orderModel')


exports.getAllOrders = (req, res, next) => {
	Order.find()
	.then(allOrders => {
		console.log(allOrders)
		res.status(200).json(allOrders)
	})
	.catch(err => {
		console.log(err)
		res.status(404).send('Error: Orders not found')
	})
}

exports.getOrder = (req, res, next) => {
	Order.findOne({ orderNumber: req.query.id })
	.then(orderReceived => {
		console.log(orderReceived)
		res.status(200).json(orderReceived)
	})
	.catch(err => {
		console.log(err)
		res.status(404).send('Error: Could not find Order Number')
	})
}

exports.addOrder = (req, res, next) => {
	const newOrder = new Order({
		orderNumber: req.body.orderNumber,
		user: req.body.user,
		products: req.body.products,
		store: req.body.store,
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
			res.status(500).send(' Error: Order not added ')
		})

}


// exports.editOrder = (req, res, next) => {
//   Store.findOne({ orderNumber: req.body.orderNumber })
//     .then(updatedOrder => {
// 		updatedOrder.orderNumber = req.body.newOrderNumber,
// 		user: req.body.user,
// 		products: req.body.products,
// 		storeSoldTo: req.body.storeSoldTo,
// 		date: req.body.date,
// 		orderPoNumber: req.body.orderPoNumber,
// 		unitsDelivered: req.body.unitsDelivered,
// 		casesDelivered: req.body.casesDelivered,
// 		totalInvoice: req.body.totalInvoice,
// 		terms: req.body.terms,
// 		receivedBy: req.body.receivedBy,
// 		notes: req.body.notes,
//       updatedOrder.storeId = req.body.newStoreId
//       updatedOrder.storeAddress = req.body.newStoreAddress
//       updatedOrder.storePhone = req.body.newStorePhone
//       updatedOrder.deliveryHours = req.body.newStoreHours
//       updatedOrder.deliveryDays = req.body.newStoreDeliveryDays
//       updatedOrder.districtManager = req.body.newDistrictManager
//       updatedOrder.forklift = req.body.newForklift
//       updatedOrder.notes = req.body.newNotes
//       updatedOrder.contactOne = req.body.newContactOne
//       updatedOrder.contactTwo = req.body.newContactTwo
//       return updatedOrder.save()
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
