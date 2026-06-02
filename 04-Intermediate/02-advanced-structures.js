// Estructuras avanzadas

// Arrays avanzados 

// - Metodos funcionales

// for each 
let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element)) //Resultado: 1, 2, 3, 4, 5

// map 
let doubled = numbers.map(element => element * 2)
console.log(doubled) // Resultado: [ 2, 4, 6, 8, 10, 12 ]

// filter
let pares = numbers.filter(element => element % 2 === 0)
console.log(pares) // Resultado: [ 2, 4, 6 ]

// reduce 
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum) // Resultado: 21