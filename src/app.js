require('./models/User')
require('./models/Store')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())

//Routes
app.use(authRoutes)

const storesRoute = require('./routes/stores')
app.use('/stores', storesRoute)

const usersRoute = require('./routes/users')
app.use('/users', usersRoute)


mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err
    console.log('Connected to Mongo')
  }
)

app.get('/', requireAuth, (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log('listening on por 3000')
})