const Joi = require('joi')

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string().valueOf('tech', 'science').required(),
  isbn: Joi.string()
    .pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/)
    .required(),
})

const bookUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = { bookSchema, bookUpdateFavoriteSchema }
