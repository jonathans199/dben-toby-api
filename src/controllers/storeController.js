const Store = require('../models/storeModel')

exports.addStore = (req, res, next) => {
  const newStore = new Store({
    storeId: req.body.storeId,
    storeAddress: req.body.storeAddress,
    storePhone: req.body.storePhone,
    deliveryHours: req.body.storeHours,
    deliveryDays: req.body.storeDeliveryDays,
    districtManager: req.body.districtManager,
    forklift: req.body.forklift,
    notes: req.body.notes,
    contactOne: req.body.contactOne,
    contactTwo: req.body.contactTwo
  })
  newStore
    .save()
    .then(newStore => {
      console.log(newStore)
      res.status(201).json(newStore)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(' Error: Store not added ')
    })
}

exports.getAllStores = (req, res, next) => {
  Store.find()
    .then(allStores => {
      console.log(allStores)
      res.status(200).json(allStores)
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error: Not found')
    })
}

exports.getStore = (req, res, next) => {
  Store.findOne({ storeId: req.body.storeId })
    .then(storeReceived => {
      console.log(storeReceived)
      res.status(200).json(storeReceived)
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('Error: Could not find store')
    })
}

exports.editStore = (res, req, next) => {
  Store.findOne({ storeId: req.body.storeId })
    .then(store => {
      store.storeId = req.body.newStoreId
      store.storeAddress = req.body.newStoreAddress
      store.storePhone = req.body.newStorePhone
      store.deliveryHours = req.body.newStoreHours
      store.deliveryDays = req.body.newStoreDeliveryDays
      store.districtManager = req.body.newDistrictManager
      store.forklift = req.body.newForklift
      store.notes = req.body.newNotes
      store.contactOne = req.body.newContactOne
      store.contactTwo = req.body.newContactTwo
      return store.save()
    })
    .then(updatedStore => {
      res.status(200).json(updatedStore)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error: could not edit Store')
    })
}
