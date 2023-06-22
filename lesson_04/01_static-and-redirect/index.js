const express = require('express')

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.get('/home', (req, res) => {
  res.send('Home page')
})

app.get('/old-home', (req, res) => {
  res.redirect(302, '/home')
})

app.listen(3000, () => console.log('Server Started!'))
