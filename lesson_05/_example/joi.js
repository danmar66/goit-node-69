const Joi = require('joi')

const booksSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
})

const validateBody = (schema) => {
  const func = (data) => {
    const { error } = schema.validate(data)
    if (error) {
      console.log(error.message)
    }
  }

  return func
}

validateBody(booksSchema)({ title: '1984', author: 'Orwell' })

validateBody(userSchema)({ name: 'Daniel', age: '25' })
