const jwt = require('jsonwebtoken')
const { authHelper } = require('../../helpers')
const Token = require('../../models/token')

const { JWT_SECRET } = process.env

const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body
  let payload
  try {
    payload = jwt.verify(refreshToken, JWT_SECRET)
    if (payload.type !== 'refresh') {
      return res.status(400).json({ message: 'Invalid token' })
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(400).json({ message: 'Token expired' })
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ message: 'Invalid token' })
    }
  }

  const token = await Token.findOne({ tokenId: payload.id })

  if (token === null) {
    return res.status(400).json({ message: 'Invalid token' })
  }

  const newTokens = await authHelper.updateTokens(token.userId)
  return res.json(newTokens)
}

module.exports = refreshTokens
