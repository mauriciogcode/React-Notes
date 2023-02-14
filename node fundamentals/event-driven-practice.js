const EventEmitter = require('events')
const http = require('http')
// const myEmitter = new EventEmitter()

// // Los On son los Observer . Esperan hasta que el emit emite
// myEmitter.on('newSale', () => {
//   console.log('There was a new sale')
// })

// myEmitter.on('newSale', () => {
//   console.log('Custome name: Jonas')
// })

// myEmitter.on('newSale', (stock) => {
//   console.log(`There are now ${stock} items in stock`)
// })

// // Emit es como el click del add event listener. Emite el evento
// myEmitter.emit('newSale', 9)

//////////////////// ES6 2015  ////////////////////////////////

class Sales extends EventEmitter {
  constructor() {
    super()
  }
}
const myEmitter = new Sales()

myEmitter.on('newSale', () => {
  console.log('There was a new sale')
})

myEmitter.on('newSale', () => {
  console.log('Custome name: Jonas')
})

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items in stock`)
})

// Emit es como el click del add event listener. Emite el evento
myEmitter.emit('newSale', 9)

///////////////////
// En el caso de server, el server on observa por su cuenta
// por que tiene el emit dentro de si, y no es necesario crearlo

const server = http.createServer()
// On siempre va a significar que el codigo esta escuchando un evento
// En este caso un request
server.on('request', (req, res) => {
  console.log('Request Recived')
  console.log(req.url)
  res.end('Request RECEIVED')
})

server.on('request', (req, res) => {
  console.log('Another request, the second')
})

server.on('close', (req, res) => {
  res.end('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Wating for request.... on listen 800')
})
