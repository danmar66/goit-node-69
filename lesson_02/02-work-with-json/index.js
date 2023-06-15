const books = require('./books')

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case 'getAll':
      const allBooks = await books.getAll()
      console.log(allBooks)
      break
    case 'getOneById':
      const oneBook = await books.getOneById(id)
      console.log(oneBook)
      break
    case 'add':
      const newBook = await books.add({ title, author })
      console.log(newBook)
      break
    case 'updateById':
      const updateBook = await books.updateById(id, { title, author })
      console.log(updateBook)
      break
    case 'removeById':
      const removeBook = await books.removeById(id)
      console.log(removeBook)
      break

    default:
      break
  }
}

// invokeAction({ action: 'getAll' })
// invokeAction({ action: 'getOneById', id: 'u9kgwNWGi3uUUwh0b8V491' })
// invokeAction({ action: 'add', author: 'George Orwell', title: '1984' })
// invokeAction({
//   action: 'updateById',
//   id: 'vQU9rne2LhLGBM5F4lmvi',
//   author: 'George Orwell',
//   title: '1984',
// })
// invokeAction({
//   action: 'removeById',
//   id: 'vQU9rne2LhLGBM5F4lmvi',
// })
