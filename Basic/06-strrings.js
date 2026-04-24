// Strings 

// -------------------------- Concatenación de cadenas de texto --------------------------

let myName = "Facundo"
let miSaludo = "Hola " + myName + " como estas?"
console.log(miSaludo)

// Longitud de una cadena de texto

console.log(myName.length) // Resultado: 7

// Acceso a caracteres individuales

console.log(myName[0]) // Resultado: "F"
console.log(myName[1]) // Resultado: "a"
console.log(myName[2]) // Resultado: "c"

// -------------------------- Métodos de cadenas de texto ----------------------------

// Convertir a mayúsculas
console.log(myName.toUpperCase()) // Resultado: "FACUNDO"

// Convertir a minúsculas
console.log(myName.toLowerCase()) // Resultado: "facundo"   

// indexOf para encontrar la posición de un carácter o subcadena
console.log(myName.indexOf("c")) // Resultado: 2

// includes para verificar si una subcadena está presente
console.log(myName.includes("undo")) // Resultado: true

// slice para extraer una parte de la cadena
console.log(myName.slice(0, 4)) // Resultado: "Facu"

// replace para reemplazar parte de la cadena
console.log(myName.replace("Facundo", "Manu")) // Resultado: "Manundo"


// -------------------- Template literals para concatenar de forma más legible --------------------------

// String en varias líneas con template literals con backticks (``), tambien se imprime tal cual lo escribimos, con saltos de linea incluidos

let mensaje = `Este es mi cadena de texto 
en varias lineas ,
incluso 3 lineas si quiero`
console.log(mensaje)

// Interpolación de variables con template literals

console.log(`Hola ${myName}, bienvenido a JavaScript!`) // Resultado: "Hola Facundo, bienvenido a JavaScript!"




