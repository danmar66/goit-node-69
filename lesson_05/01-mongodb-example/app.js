const mongoose = require('mongoose')
require('dotenv').config()

const { API_KEY, SECRET_PHRASE, DB_HOST } = process.env

console.log(API_KEY, '\n', SECRET_PHRASE, '\n', DB_HOST)

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err.message))
