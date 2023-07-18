const express = require('express')
const controllerWrapper = require('../../helpers/controllerWrapper')
const controller = require('../../controllers/users')
const { auth } = require('../../middlewares')

const router = express.Router()

router.post('', controllerWrapper(auth), controllerWrapper(controller.addBook))
router.get(
  '/books',
  controllerWrapper(auth),
  controllerWrapper(controller.getBooks)
)
router.get(
  '/info',
  controllerWrapper(auth),
  controllerWrapper(controller.getInfo)
)
router.get('/verify/:token', controllerWrapper(controller.verifyEmail))

module.exports = router
