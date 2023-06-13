const fs = require('fs/promises')

const filePath = './data.txt'

const fileOperation = async ({ action, data }) => {
  switch (action) {
    case 'read':
      const result = await fs.readFile(filePath, `utf-8`)
      console.log(result)
      break

    case 'add':
      await fs.appendFile(filePath, data)
      break

    case 'replace':
      await fs.writeFile(filePath, data)
      break

    default:
      console.log('Unknown action')
      break
  }
}

fileOperation({ action: 'read' })
// fileOperation({ action: 'add', data: 'smth' })
// fileOperation({ action: 'replace', data: 'Hello' })
// fs.rename(filePath, './quote.txt')
// fs.unlink('./quote.txt')
