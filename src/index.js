require('./models/user')
require('./models/store')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = 'mongodb+srv://jonathans199:Jsanch08!!@cluster0.nqq8i.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance')
})

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to Mongo', err)
})


app.get('/', requireAuth, (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, () => {
  console.log('listening on por 3000')
})

