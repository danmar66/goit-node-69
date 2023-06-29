const books = require('../../models/books')
const express = require('express')
const RequestError = require('../../helpers')
const Joi = require('joi')

const Book = require('../../models/book')

const bookShema = Joi.object({
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

const router = express.Router()

router.get('', async (req, res) => {
  try {
    const result = await Book.find()
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    // const result = await Book.findOne({ _id: id })
    const result = await Book.findById(id)
    if (!result) {
      throw RequestError(404, 'Not Found')
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.post('', async (req, res, next) => {
  try {
    // const { error } = bookShema.validate(req.body)
    // if (error) {
    //   throw RequestError(400, error.message)
    // }
    const result = await Book.create(req.body)
    return res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { error } = bookShema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const { id } = req.params
    // const result = await Book.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //   select: 'title author',
    // })
    const result = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      select: '-createdAt -updatedAt',
    })
    if (!result) {
      throw RequestError(404, 'Not Found')
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id/favorite', async (req, res, next) => {
  try {
    const { error } = bookUpdateFavoriteSchema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const { id } = req.params
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
      throw RequestError(404, 'Not Found')
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await Book.findByIdAndDelete(id)
    if (!result) {
      throw RequestError(404, 'Not Found')
    }
    res.json({ message: 'Delete success' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
