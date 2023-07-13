const app = require('./app')
const mongoose = require('mongoose')

const { DB_HOST, PORT } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT, () => console.log('Server Started!')))
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
