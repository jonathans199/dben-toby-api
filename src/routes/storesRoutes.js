const express = require('express')
const router = express.Router()

const Store = require('../models/storeModel')
// const requireAuth = require('../middlewares/requireAuth')
// const { request } = require('express')

// Get all Stores
router.get('/', async (req, res) => {
  try {
    const allStores = await Store.find()
    res.status(200).json(allStores)
  } catch (err) {
    res.json({ message: err })
  }
})

// Get Store
router.get('/:storeId', async (req, res) => {
  try {
    const store = await Store.findById(req.params.storeId)
    res.json(store)
  } catch (err) {
    res.json({ message: err })
  }
})

// Delete Store
router.delete('/:storeId', async (req, res) => {
  try {
    const removedStore = await Store.remove({ _id: req.params.storeId })
    res.json(removedStore)
  } catch (err) {
    res.json({ message: err })
  }
})

// Update Store
router.patch('/:storeId', async (req, res) => {
  try {
    const updatedStore = await Store.updateOne(
      { _id: req.params.storeId },
      { $set: { storeId: req.body.storeId } }
    )
    res.json(updatedStore)
  } catch (err) {
    res.json({ message: err })
  }
})

// Add Store
router.post('/add-store', async (req, res) => {
  const newStore = new Store({
    storeId: req.body.storeId,
    storeAddress: req.body.storeAddress,
  })

  try {
    const savedStore = await newStore.save()
    res.json(savedStore)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
