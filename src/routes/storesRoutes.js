const express = require('express')
const router = express.Router()

const storeController = require('../controllers/storeController')
const Store = require('../models/storeModel')

router.get('/', storeController.getAllStores)

router.get('/get-store', storeController.getStore)

router.post('/add-store', storeController.addStore)

router.put('/edit-store', storeController.editStore)

router.delete('/delete-store', storeController.deleteStore)


// Delete Store
// router.delete('/:storeId', async (req, res) => {
//   try {
//     const removedStore = await Store.remove({ _id: req.params.storeId })
//     res.json(removedStore)
//   } catch (err) {
//     res.json({ message: err })
//   }
// })

// Update Store
// router.patch('/:storeId', async (req, res) => {
//   try {
//     const updatedStore = await Store.updateOne(
//       { _id: req.params.storeId },
//       { $set: { storeId: req.body.storeId } }
//     )
//     res.json(updatedStore)
//   } catch (err) {
//     res.json({ message: err })
//   }
// })

module.exports = router
