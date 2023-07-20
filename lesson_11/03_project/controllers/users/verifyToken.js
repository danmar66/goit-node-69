const { RequestError } = require('../../helpers')
const User = require('../../models/user')

const verifyToken = async (req, res) => {
  const { token } = req.params
  const { password } = req.body

  const user = await User.findOne({ verifyToken: token })

  if (!user) {
    throw RequestError(400, 'Verify token is not valid')
  }

  if (user.verified) {
    throw RequestError(400, 'User has already verified')
  }

  await User.findByIdAndUpdate(user._id, {
    verified: true,
    // verifyToken: null,
  })

  return res.json({ message: 'Success' })
}

module.exports = verifyToken
