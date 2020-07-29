require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')
require('./models/userModel')
require('./models/storeModel')

const authRoutes = require('./routes/auth')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

const authRoute = require('./routes/auth')
app.use(authRoutes)

const storesRoute = require('./routes/storesRoutes')
app.use('/api/stores', storesRoute)

const usersRoute = require('./routes/usersRoutes')
app.use('/api/users', usersRoute)


mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then( result => {
    app.listen(3001)
    console.log('Connected to Mongo')
  })
  .catch(err => {
    console.log(err)
  })

app.get('/', requireAuth, (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// app.listen(3000, () => {
//   console.log('Node API on port 3000')
// })
