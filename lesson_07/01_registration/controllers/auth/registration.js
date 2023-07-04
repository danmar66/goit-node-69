const User = require('../../models/user')
const { RequestError } = require('../../helpers')
const bcrypt = require('bcrypt')

const registration = async (req, res) => {
  const { email, password } = req.body

  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const result = await User.create({
    email,
    password: hashedPassword,
  })
  res.status(201).json({
    id: result._id,
    email,
  })

  //   try {
  // const result = await User.create(req.body)
  // res.status(201).json(result)
  //   } catch (error) {
  //     if (error.message.includes('E11000 duplicate key error')) {
  //       throw RequestError(409, 'User with this email already exist')
  //     }
  //   }
}

module.exports = registration
