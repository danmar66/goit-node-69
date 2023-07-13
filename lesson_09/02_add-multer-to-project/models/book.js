const { Schema, model } = require('mongoose')

const shema = new Schema(
  {
    title: {
      type: String,
      minLength: 5,
      required: [true, 'Please, specify book title'],
    },
    author: { type: String, required: true },
    image: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
)

const Book = model('book', shema)

module.exports = Book
