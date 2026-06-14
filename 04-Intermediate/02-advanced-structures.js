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


// - Manipulacion

// flat (aplanar)
let nestedArray = [1, [2, [3, [4]]]] // Array compuesto
let flatArray = nestedArray.flat(2)
console.log(flatArray) // Resultado: [ 1, 2, 3, [ 4 ] ]

// flatMap
let phrases = ["Hola mundo", "Adios Mundo"] 
let words = phrases.flatMap(phrases => phrases.split(" "))
console.log(words) // Resultado: [ 'Hola', 'mundo', 'Adios', 'Mundo' ]


// - Ordenacion

let unsorted = ["a", "x", "t", "e", "g", "h"]
let sorted = unsorted.sort() // sort() ordena correctamente los string sin indicar parametros
console.log(sorted) // Resultado: [ 'a', 'e', 'g', 'h', 't', 'x' ]

unsorted = [3, 4, 1, 6]
sorted = unsorted.sort((a, b) => a - b) // para ordenar numeros, sort necesita indicarle un criterio de ordenacion
console.log(sorted) // resultado: [ 1, 3, 4, 6 ]

// reverse

sorted.reverse() // reverse no crea un nuevo array, modifica el mismo
console.log(sorted) // Resultado: [ 6, 4, 3, 1 ]


// - Busqueda

console.log(sorted.includes(4)) // Resultado: true
console.log(sorted.includes(5)) // Resultado: false

// find
let primerPar = sorted.find(element => element % 2 === 0) // si no cumple el criterio, devuelve: undefined
console.log(primerPar) // Resultado: 6 

// findIndex
let primerParIndex = sorted.findIndex(element => element % 2 === 0)
console.log(primerParIndex) // Resultado: indice 0


// - Sets avanzados (relacionado con la teoria de conjuntos)

// Operaciones 

// Eliminacion de duplicados
const numbsArray = [1, 2, 2, 3, 4, 5, 6, 6]
const numberSet = [...new Set(numbsArray)]
console.log(numberSet)

// Union (U)
const setA = new Set ([1, 2, 3])
const setB = new Set ([2, 3, 4, 5])
const unionAB = new Set ([...setA, ...setB])
console.log(unionAB)

// Interseccion 

const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion) // Set(2) { 2, 3 }

// Diferencia

const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log(diferencia) // Set(1) { 1 }

// Conversion

console.log([...setA])

// Iteracion

// for each

setA.forEach(element => console.log(element))

// Maps avanzados 

let myMap = new Map([
    ["name", "facundo"],
    ["age", 37]
])
console.log(myMap) // Resultado: Map(2) { 'name' => 'facundo', 'age' => 37 }

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversion

// Mapa a array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap) // Resultado: [ [ 'name', 'facundo' ], [ 'age', 37 ] ]

// Mapa a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(arrayFromMap)
