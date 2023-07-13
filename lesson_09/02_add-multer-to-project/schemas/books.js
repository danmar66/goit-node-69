const Joi = require('joi')

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string(),
})

const bookUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = { bookSchema, bookUpdateFavoriteSchema }
