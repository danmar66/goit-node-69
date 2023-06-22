const express = require('express')
const booksRouter = require('./routes/api/books')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const formatLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(morgan(formatLogger))

app.use('/api/books', booksRouter)

app.use((req, res) => {
  res.status(404).json({ mesaage: 'Not found' })
})

app.listen(3000, () => console.log('Server Started!'))
