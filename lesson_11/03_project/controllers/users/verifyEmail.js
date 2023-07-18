const { RequestError } = require('../../helpers')
const User = require('../../models/user')

const verifyEmail = async (req, res) => {
  const { token } = req.params

  const user = await User.findOne({ verifyToken: token })

  if (!user) {
    throw RequestError(400, 'Verify token is not valid')
  }

  if (user.verified) {
    throw RequestError(400, 'User have already verificated')
  }

  await User.findByIdAndUpdate(user._id, {
    verified: true,
    // verifyToken: null
  })

  return res.json({ message: 'Success' })
}

module.exports = verifyEmail
