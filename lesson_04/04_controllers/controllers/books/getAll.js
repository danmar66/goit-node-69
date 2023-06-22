const books = require('../../models/books')

const getAll = async (req, res) => {
  const result = await books.getAll()
  res.json(result)
}

module.exports = getAll
