require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const booksRouter = require('./routes/api/books')
const authRouter = require('./routes/api/auth')
const usersRouter = require('./routes/api/users')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(cors())
app.use(logger(formatsLogger))
app.use(express.json())

app.use('/public', express.static('public'))
app.use('/api/books', booksRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  if (err.message.includes('Cast to ObjectId failed')) {
    res.status(400).json({ message: 'ID is not valid' })
  }

  if (err.name === 'ValidationError') {
    res.status(400).json({ message: err.message })
  }

  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
