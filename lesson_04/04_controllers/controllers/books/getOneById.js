const books = require('../../models/books')
const { RequestError } = require('../../helpers')

const getOneById = async (req, res, next) => {
  const { id } = req.params
  const result = await books.getOneById(id)
  if (!result) {
    throw RequestError(404, 'Not Found')
  }
  res.json(result)
}

module.exports = getOneById
