const jwt = require('jsonwebtoken')
const { RequestError } = require('../helpers')
const { JWT_SECRET } = process.env
const User = require('../models/user')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization || ''
  const [type, token] = authHeader.split(' ')

  if (type !== 'Bearer') {
    throw RequestError(401, 'Token type is not valid!')
  }

  if (!token) {
    throw RequestError(401, 'No token provided')
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET) // витягуємо id із токена
    const user = await User.findById(id) // шукаємо юзера в базі данних
    req.user = user // додаємо до request нашого юзера
  } catch (error) {
    if (
      error.name === 'TokenExpiredError' ||
      error.name === 'JsonWebTokenError'
    ) {
      throw RequestError(401, 'JWT token is not valid')
    }
    throw error
  }

  next()
}

module.exports = auth
