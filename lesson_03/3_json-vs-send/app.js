const express = require('express')

const books = require('./books')

const app = express()

app.set('json spaces', 4)

app.get('/', (request, response) => {
  response.send('Home Page')
})

app.get('/books', (req, res) => {
  //   res.send(books)
  //   res.send(null)
  res.json(null)
})

app.listen(3000, () => console.log('Server Started!'))
