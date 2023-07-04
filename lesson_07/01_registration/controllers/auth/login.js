const User = require('../../models/user')
const { RequestError } = require('../../helpers')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw RequestError(401, 'Email is not valid')
  }
  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    throw RequestError(401, 'Password is not valid')
  }

  res.json({ token: '<TOKEN>' })
}

module.exports = login
