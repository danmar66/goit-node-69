const Book = require('../../models/book')
const { RequestError } = require('../../helpers')

const updateById = async (req, res, next) => {
  const { id } = req.params
  const result = await Book.findByIdAndUpdate(id, req.body, {
    new: true,
    select: '-createdAt -updatedAt',
  })
  if (!result) {
    throw RequestError(404, 'Not Found')
  }
  res.json(result)
}

module.exports = updateById
