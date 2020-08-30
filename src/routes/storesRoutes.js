const express = require('express')
const router = express.Router()

const authorization = require('../middlewares/requireAuth')
const storeController = require('../controllers/storeController')

router.get('/', authorization, storeController.getAllStores )

router.get('/:storeId', authorization, storeController.getStore)

// router.get('/find/:query', storeController.findStore)

router.post('/add-store', authorization, storeController.addStore)

router.put('/edit-store', authorization, storeController.editStore)

router.delete('/delete-store', authorization, storeController.deleteStore)

module.exports = router
