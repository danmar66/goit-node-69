const express = require('express')

const booksController = require('../../controllers/books')

const controllerWrapper = require('../../helpers/controllerWrapper')

const schema = require('../../schemas/books')

const { validateBody } = require('../../middlewares')

const router = express.Router()

router.get('', controllerWrapper(booksController.getAll))

router.get('/:id', controllerWrapper(booksController.getOneById))

router.post(
  '/',
  validateBody(schema.booksSchema),
  controllerWrapper(booksController.add)
)

router.put(
  '/:id',
  validateBody(schema.booksSchema),
  controllerWrapper(booksController.updateById)
)

router.delete('/:id', controllerWrapper(booksController.removeById))

module.exports = router
