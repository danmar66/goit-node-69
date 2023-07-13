const User = require('../../models/user')

const getBooks = async (req, res) => {
  const { user } = req

  const userBooks = await User.findById(user._id).populate('books', {
    title: 1,
    author: 1,
  })

  return res.json({ books: userBooks.books })
}

module.exports = getBooks
