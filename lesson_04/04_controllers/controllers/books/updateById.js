const books = require('../../models/books')

const updateById = async (req, res, next) => {
  const { id } = req.params // витягуємо id
  const result = await books.updateById(id, req.body) // оновлюємо запис
  if (!result) {
    throw RequestError(404, 'Not found')
  }
  res.json(result)
}

module.exports = updateById
