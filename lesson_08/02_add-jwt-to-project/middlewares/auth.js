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
    const payload = jwt.verify(token, JWT_SECRET)
    if (payload.type !== 'access') {
      return res.status(401).json({ message: 'Invalid token' })
    }
    const user = await User.findById(payload.userId)
    req.user = user
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw RequestError(401, 'Token expired')
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw RequestError(401, 'Invalid token')
    }
  }

  next()
}

module.exports = auth
