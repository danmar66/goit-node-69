const http = require('http')
const { Server } = require('socket.io')

const httpServer = http.createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

const { PORT = 5000 } = process.env

io.on('connection', (socket) => {
  // console.log('New client connected')

  // socket.emit('chatMessage', 'Welcome to chat!')
  // socket.broadcast.emit('chatMessage', 'New user connected!')

  socket.on('chatMessage', (message) => {
    socket.broadcast.emit('chatMessage', message)
  })
})

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
