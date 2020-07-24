const express = require('express')
const Store = require('../models/Store')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Getting All Stores')
})

router.get('/store', (req, res) => {
  res.send('Getting one Store')
})

// router.post('/', (req, res) => {
//   const store = new Store({
//     storeId: req.body.storeId,
//     storeAddress: req.body.storeAddress,
//   })

//   store
//     .save()
//     .then((data) => {
//       res.json(data)
//     })
//     .catch((err) => {
//       res.json({
//         message: err,
//       })
//       console.log('New store added')
//     })
// })

router.post('/', async (req, res) => {
  // const { storeId, storeAddress } = req.body
  const store = new Store({
    storeId: req.body.storeId,
    storeAddress: req.body.storeAddress
  })

  try {
    // const store = new Store({ storeId, storeAddress })
    
    const savedStore = await store.save()
    res.json(savedStore)
  } catch (err) {
    res.status(422).send(err.message)
  }
})

module.exports = router
