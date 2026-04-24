// 1. Concatena dos cadenas de texto

let concatenacion = "Hola " + "Mundo!"
console.log(concatenacion)

// 2. Muestra la longitud de una cadena de texto

let string = "Esto es una cadena de texto"
console.log(`La cadena tiene: ${string.length} caracteres.`)

// 3. Muestra el primer y último carácter de un string

console.log(string[0])
console.log(string[26])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(string.toUpperCase())
console.log(string.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let stringBig = `Esto es una cadena
multi
linea
`
console.log(stringBig)

// 6. Interpola el valor de una variable en un string

console.log(`La cadena tiene: ${string.length} caracteres.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let myName = "Mi nombre es Facundo"
console.log(myName.replaceAll(" ", "-")) 


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(myName.includes("nombre"))

// 9. Comprueba si dos strings son iguales

let string3 = "facundo"
let string4 = "facundo"

console.log(string3 === string4) // true


// 10. Comprueba si dos strings tienen la misma longitud

let string1 = "facundo"
let string2 = "vaz"

console.log(string1.length === string2.length) // false


