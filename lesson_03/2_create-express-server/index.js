const express = require('express')

const app = express()

app.get('/', (request, response) => {
  //   console.log(request.method)
  //   console.log(request.url)
  response.send('Home Page')
})

app.get('/contacts', (request, response) => {
  response.send('Contacts Page')
})

app.listen(3000, () => console.log('Server Started!'))
