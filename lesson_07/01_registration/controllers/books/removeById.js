const Book = require('../../models/book')
const { RequestError } = require('../../helpers')

const removeById = async (req, res, next) => {
  const { id } = req.params
  const result = await Book.findByIdAndDelete(id)
  if (!result) {
    throw RequestError(404, 'Not Found')
  }
  res.json({ message: 'Delete success' })
}

module.exports = removeById
