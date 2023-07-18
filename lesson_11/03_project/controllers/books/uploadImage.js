const Book = require('../../models/book')
const path = require('path')
const fs = require('fs/promises')
const { RequestError } = require('../../helpers')

const uploadImage = async (req, res) => {
  const { filename } = req.file

  if (!filename) {
    throw RequestError(400, 'File is require!')
  }

  const tmpPath = path.resolve(__dirname, '../../tmp', filename)
  const publicPath = path.resolve(__dirname, '../../public', filename)

  try {
    await fs.rename(tmpPath, publicPath)
  } catch (error) {
    await fs.unlink(tmpPath)
    throw error
  }

  const bookId = req.params.id
  const book = await Book.findByIdAndUpdate(
    bookId,
    { image: `public/${filename}` },
    { new: true }
  )

  res.json({ image: book.image })
}

module.exports = uploadImage
