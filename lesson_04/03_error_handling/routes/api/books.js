const books = require('../../models/books')
const express = require('express')
const RequestError = require('../../helpers')
const Joi = require('joi')

const bookShema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

const router = express.Router()

router.get('', async (req, res) => {
  try {
    const result = await books.getAll()
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await books.getOneById(id)
    if (!result) {
      throw RequestError(404, 'Not Found')

      // const error = new Error('Not Found')
      // error.status = 404
      // throw error

      // return res.status(404).json({ message: 'Not Found' })
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.post('', async (req, res, next) => {
  try {
    const { error } = bookShema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const result = await books.add(req.body)
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
    const result = await books.updateById(id, req.body)
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
    const result = await books.removeById(id)
    if (!result) {
      throw RequestError(404, 'Not Found')
    }
    res.json({ message: 'Delete success' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
