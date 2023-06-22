const express = require('express')
const booksRouter = require('./routes/api/books')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/books', booksRouter)

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err
  res.status(status).json({ message })
})

app.listen(3000, () => console.log('Server Started!'))
