const User = require('../../models/user')
const { RequestError, sendMail } = require('../../helpers')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')

const registration = async (req, res) => {
  const { email, password } = req.body

  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    const verifyToken = v4()

    const result = await User.create({
      email: email,
      password: hashedPassword,
      verifyToken,
    })

    await sendMail({
      to: email,
      subject: 'Please, confirm your email',
      html: `<a href="http://localhost:3000/api/users/verify/${verifyToken}">Confirm your email</a>`,
    })

    res.status(201).json({ id: result._id, email: result.email })
  } catch (error) {
    if (error.message.includes('E11000 duplicate key error')) {
      throw RequestError(409, 'User with this email already exist')
    }
  }
}

module.exports = registration
