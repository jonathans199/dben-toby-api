const express = require('express')
const router = express.Router()

const authorization = require('../middlewares/requireAuth')
const storeController = require('../controllers/storeController')

router.get('/', storeController.getAllStores)

router.get('/:storeId', storeController.getStore)

// router.get('/find/:query', storeController.findStore)

router.post('/add-store', storeController.addStore)

router.put('/edit-store', storeController.editStore)

router.delete('/delete-store', storeController.deleteStore)

module.exports = router
