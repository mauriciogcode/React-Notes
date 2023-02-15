const fs = require('fs')

setTimeout(
  () =>
    console.log(
      'Timer 1 finished Out From The Loop `cause im not in a callback"'
    ),
  0
)
setImmediate(() =>
  console.log(
    'Immediate 1 finished Out From The Loop `cause im not in a callback'
  )
)

fs.readFile('test-file.txt', () => {
  console.log('I/O finished, i am out of the loop too')
  console.log('----------------')

  setTimeout(() => console.log('Timer 2 finished'), 0)
  setTimeout(() => console.log('Timer 3 finished'), 3000)
  setImmediate(() => console.log('Immediate 2 finished'))

  process.nextTick(() =>
    console.log('Im Process.next, i run between the stages')
  )
})

console.log('Hello from the top-level code')
