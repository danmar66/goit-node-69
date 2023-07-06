const Book = require('../../models/book')

const add = async (req, res) => {
  const result = await Book.create(req.body)
  return res.status(201).json(result)
}

module.exports = add
