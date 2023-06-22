const books = require('../../models/books')

const removeById = async (req, res, next) => {
  const { id } = req.params
  const result = await books.removeById(id)
  if (!result) {
    throw RequestError(404, 'Not found')
  }
  res.json({
    message: 'Delete success',
  })
}

module.exports = removeById
