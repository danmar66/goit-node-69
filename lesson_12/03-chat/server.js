const http = require('http')
const app = require('express')()
const { Server } = require('socket.io')

const httpServer = http.createServer(app)
const io = new Server(httpServer)

app.use

const { PORT = 5000 } = process.env

io.on('connection', (socket) => {
  socket.on('chatMessage', (message) => {
    socket.broadcast.emit('chatMessage', message)
  })
})

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html')
})

httpServer.listen(PORT, (error) => {
  if (error) {
    console.error(error)
    process.exit(1)
  }

  console.log(`Listening on port ${PORT}`)
})
