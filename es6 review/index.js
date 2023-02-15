const fs = require('fs')
const superagent = require('superagent')

//Hacemos una promesa, ignrorar hasta llegar a la linea 82
const readFilePro = (file) => {
  // Promise() es un constructor
  return new Promise((resolve, reject) => {
    // el readfile es comun
    fs.readFile(file, (err, data) => {
      // aqui agregaremos lo asincronico
      // lo que pasemos por resolve()
      // sera cumplida para el metodo then
      // es decir que sera cumplida la promesa con esos datos
      if (err) reject('I could not find that file!!!')
      resolve(data)
    })
  })
}

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file')
      resolve('success')
    })
  })
}

// vamos a usar super agente para hacer un http request

/* Pequeña biblioteca progresiva de solicitudes HTTP
 del lado del cliente y módulo Node.js con la misma API,
  compatible con muchas funciones de cliente HTTP de alto nivel
*/

// This is an example of callbacks inside of callbacks

/* fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`)

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    // ya tenemos un callbac arriba
    .end((err, res) => {
      // manejo del error
      if (err) return consoele.log(err.message)
      console.log(res.body.message)

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('Random dog image saved to file')
      })
    })
})



Usar promesas para la solicitud http
usamos super agent en este ejemplo por que 
las promesas ya vienen integradas para consumir
para hacerlas en node.js habria que definirlas

    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    el metodo get ya retorna una promesa
    promesa implementa el concepto de valor futuro que esperamos recibir en un futuro
    
    'hey server traeme una imagen 
    cualquiera de un perro en el background
    , avisame cuando este lista,
    y luego dame esa informacion de vuelta.
    
    una promesa que retorna con una 
    informacion es una 'resolve promise'
    esta puede ser fullfill{cumplida} o 
    rejected{error}
    

*/
/* fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed: ${data}`)

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    // promesa en lugar del callback - then solo sirve para fullfull promises
    .then((res) => {
      // retirado para usar catch if (err) return consoele.log(err.message)
      console.log(res.body.message)

      /////////////asi como el fs de arriba no cuenta
      ////////////por que no puede trabajar por defecto con las promesas
      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message)
        console.log('Random dog image saved to file')
      }) ////////////////////
    })

    // manejo del error o del reject

    .catch((err) => {
      console.log[err.message]
    })
}) */

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`)
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//   })
//   .then((res) => {
//     console.log(res.body.message)

//     return writeFilePro('dog-img.txt', res.body.message)

//     // fs.writeFile('dog-img.txt', res.body.message, (err) => {
//     //   if (err) return console.log(err.message)
//     //   console.log('Random dog image saved to file')
//     // })
//   })
//   .then(() => {
//     console.log('Random dog image saved to file')
//   })

//   .catch((err) => {
//     console.log[err.message]
//   })

//Finalmente cambio todo por promesas para que queden todos encadenados con then
//y no con callbacks y queda un solo catch para los errores y no tantos err

//////////////////////////////////
// Asyn Await

// async en al palbra hace que no blooque el runtime
// se pueden poner todos los await que se quieran

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`)
    console.log(`Breed: ${data}`)

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    )
    console.log(res.body.message)

    await writeFilePro('dog-img.txt', res.body.message)
    console.log('Random dog image saved to file')
  } catch (err) {
    console.log(err)
  }
}
getDogPic()
// Aqui se usa el try catch para el error. no se usa con . este catch
