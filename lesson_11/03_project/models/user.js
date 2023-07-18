const { Schema, model, Types } = require('mongoose')

const schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'user email is not valid'],
    },
    password: {
      type: String,
      minLength: [6, 'password should be at least 6 characters long'],
    },
    books: {
      type: [Types.ObjectId],
      ref: 'book',
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const User = model('user', schema)

module.exports = User
