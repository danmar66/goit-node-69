const express = require('express')
const schema = require('../../schemas/books')
const { validateBody } = require('../../middlewares')
const booksController = require('../../controllers/books')
const controllerWrapper = require('../../helpers/controllerWrapper')

const router = express.Router()

router.get('', controllerWrapper(booksController.getAll))

router.get('/:id', controllerWrapper(booksController.getOneById))

router.post(
  '/',
  validateBody(schema.bookSchema),
  controllerWrapper(booksController.add)
)

router.put(
  '/:id',
  validateBody(schema.bookSchema),
  controllerWrapper(booksController.updateById)
)

router.delete('/:id', controllerWrapper(booksController.removeById))

module.exports = router
