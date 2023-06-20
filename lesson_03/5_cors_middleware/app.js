const express = require('express')
const books = require('./books')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (request, response) => {
  response.send('Home Page')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.listen(3000, () => console.log('Server Started!'))
