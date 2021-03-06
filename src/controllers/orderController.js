const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const Order = require('../models/orderModel')

exports.getAllOrders = (req, res, next) => {
	Order.find()
		.then(allOrders => {
			// console.log(allOrders)
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
			// console.log(orderReceived)
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
		orderPoNumber: req.body.orderPoNumber,
		unitsDelivered: req.body.unitsDelivered,
		casesDelivered: req.body.casesDelivered,
		totalInvoice: req.body.totalInvoice,
		terms: req.body.terms,
		receivedBy: req.body.receivedBy,
		notes: req.body.notes,
		signature: req.body.signature
	})

	const msg = {
		to: newOrder.user,
		cc: 'sales@dbentoby.com',
		from: { email: 'Dsd001.dbt@gmail.com', name: 'DBen-Toby Sales app' },
		subject: `New order ${newOrder.orderNumber} from Dbentoby Sales app by ${newOrder.user}`,
		text: 'here is the test from node',
		html: `<strong> Order #</strong> ${newOrder.orderNumber} <p> <strong>user:</strong> ${newOrder.user} </p><strong> See order here:</strong> http://jonsthewebguy.com/orderlink/${newOrder.orderNumber} </strong> <p> <h4> Notes: ${newOrder.notes ? newOrder.notes : 'no notes'} </h4></p>  <p><h2> Total $${newOrder.totalInvoice} </h2> </p>`,
	}

	newOrder
		.save()
		.then(newOrder => {
			// console.log(newOrder)
			res.status(201).json(newOrder)
		})
		.catch(err => {
			console.log(err)
			res.status(500).send(' Error: Order not added ')
		})
	sgMail
		.send(msg)
		.then(() => {
			console.log('message sent')
		})
		.catch(error => {
			console.log(error)
		})
}

exports.editOrder = (req, res, next) => {
	Order.findOne({ orderNumber: req.body.orderNumber })
		.then(updatedOrder => {
			// updatedOrder.orderNumber = req.body.newOrderNumber
			// updatedOrder.orderPoNumber = req.body.newOrderPoNumber
			// updatedOrder.user = req.body.newUser
			// updatedOrder.store = req.body.newStore
			// updatedOrder.unitsDelivered = req.body.newUnitsDelivereds
			updatedOrder.casesDelivered = req.body.newCasesDelivered
			updatedOrder.totalInvoice = req.body.NewTotalInvoice
			updatedOrder.terms = req.body.newTerms
			updatedOrder.receivedBy = req.body.newReceivedBy
			updatedOrder.notes = req.body.newNotes
			updatedOrder.products = req.body.newProducts
			return updatedOrder.save()
		})
		.then(updatedStore => {
			res.status(200).json(updatedStore)
		})
		.catch(err => {
			console.log(err)
			res.status(500).send('Error: could not edit Order')
		})
}

exports.deleteOrder = (req, res, next) => {
	Order.remove({ storeId: req.body.storeId }).then(removedOrder => {
		res.status(200).json(removedOrder)
	})
}
