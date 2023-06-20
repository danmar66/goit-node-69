const express = require('express')
const booksRouter = require('./routes/api/books')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/api/books', booksRouter)

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.listen(3000, () => console.log('Server Started!'))
