const express = require('express')

const booksController = require('../../controllers/books')

const controllerWrapper = require('../../helpers/controllerWrapper')

const schema = require('../../schemas/books')

const { validateBody, upload } = require('../../middlewares')

const router = express.Router()

router.get('', controllerWrapper(booksController.getAll))

router.get('/:id', controllerWrapper(booksController.getOneById))

router.post(
  '/',
  validateBody(schema.bookSchema),
  controllerWrapper(booksController.add)
)

router.patch(
  '/:id/image',
  upload.single('image'),
  controllerWrapper(booksController.uploadImage)
)

router.put(
  '/:id',
  validateBody(schema.bookSchema),
  controllerWrapper(booksController.updateById)
)

router.delete('/:id', controllerWrapper(booksController.removeById))

module.exports = router
