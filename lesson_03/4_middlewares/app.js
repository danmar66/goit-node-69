const express = require('express')
const moment = require('moment')
const fs = require('fs/promises')
const books = require('./books')
const app = express()

app.use(async (req, res, next) => {
  const { method, url } = req
  const date = moment().format('DD-MM-YYYY_hh:mm:ss')
  await fs.appendFile('server.log', `\n${method} ${url} ${date}`)
  next()
})

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
