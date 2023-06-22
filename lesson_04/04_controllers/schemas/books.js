const Joi = require('joi')

const booksSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

module.exports = { booksSchema }
