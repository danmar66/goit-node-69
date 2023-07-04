const { Schema, model } = require('mongoose')

const shema = new Schema(
  {
    title: {
      type: String,
      minLength: 5,
      required: [true, 'Please, specify book title'],
    },
    author: { type: String, required: true },
    favorite: { type: Boolean, default: false },
    genre: { type: String, enum: ['tech', 'science'], required: true },
    isbn: {
      type: String,
      match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
      required: true,
      unique: true,
    },
    // email: {
    //   type: String,
    //   match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    //   required: true,
    //   unique: true,
    // },
  },
  { versionKey: false, timestamps: true }
)

const Book = model('book', shema)

module.exports = Book
