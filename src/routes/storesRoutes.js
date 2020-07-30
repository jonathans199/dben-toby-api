const express = require('express')
const router = express.Router()

const storeController = require('../controllers/storeController')

router.get('/', storeController.getAllStores)

router.get('/get-store', storeController.getStore)

router.post('/add-store', storeController.addStore)

router.put('/edit-store', storeController.editStore)

router.delete('/delete-store', storeController.deleteStore)

module.exports = router
