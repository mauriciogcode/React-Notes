/*pensar en streams como en streaming. significa arroyos
se usa para procesar piezas de datos y no todo el archivo completo

 node tiene 4 son instancias del eventemitter
readable / writable / duplex / transform
*/
// const fs = require('fs')

// nueva forma de crear un servidor con menos codigo
// const server = require('http').createServer()

// server.on('request', (req, res) => {
//   //Solutiion 1
// en esta situacion mandabamos toda la informacion
//   fs.readFile('test-file.txt', (err, data) => {
//     if (err) console.log(err)
//     res.end(data)
//   })

// Solution 2: Streams
// en esta situacion usamos stream
// el .on es el observador del event emiter de la parte anterior
// cuando recibe un dato nuevo lo envia ni bien este disponible
// const redeable = fs.createReadStream('testtt-file.txt')
// // este ve al informacion
// redeable.on('data', (chunk) => {
//   res.write(chunk)
// })
// // este ve envia la respuesta unicamente
// redeable.on('end', () => {
//   res.end()
// })
// // manejando el error se le envia un 505
// // ojo que en express es diferente
// redeable.on('error', (err) => {
//   console.log(err)
//   res.statusCode = 500
//   res.end('FIle not found')
// })

// Solution 3 and the last
/*  el pipe operator
  automaticamente regula la velocidad asi se imprime */
// const redeable = fs.createReadStream('test-file.txt')
/*   necesitamos un origen legible, luego usamos la tuberia,
  y termina en una ubicacion que se pueda escribir
  pipe es un metodo de stream de escritura
  no se explico mucho de el */
//   redeable.pipe(res)
// })

// server.listen(8000, '127.0.0.1', () => {
//   console.log('Listening...')
// })
//////////////////////////////////////
// aqui termina strams y empieza modules
/* cuando require('test-module') sucede
 
1. resolving => donde el path es resuelto
2. wrapping => aqui es donde un funcion wrapper que pasa como parametros require module filename y dirname
nos deja capacidad de manejarlas pero cierra el scope solo para el require
3. execution =>  es ejecutado por el js runtime
4. returning exports => es el retorno de la funcion wrapping
5. exports es para un objeto / export para multiples variables
caching
*/
// console.log(arguments) me permite ver los pasos anteriores como claves de las prop del 1 al 4
// console.log (require('module').wrapper); para ver el modulo wrapper
