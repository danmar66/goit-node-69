const { WebSocketServer } = require('ws')

const { PORT = 5000 } = process.env

const server = new WebSocketServer({
  port: PORT,
})

const clients = []

server.on('connection', (socket) => {
  console.log('New client connected')
  clients.push(socket)

  for (const client of clients) {
    if (client === socket) {
      client.send('Welcome to chat!')
    } else {
      client.send('New user connected')
    }
  }

  socket.on('message', (message) => {
    console.log('->', message.toString())
  })

  setInterval(() => {
    socket.send('Bang Bang! It is backend server!')
  }, 1000)
})

console.log(`Listening on port ${PORT}`)
