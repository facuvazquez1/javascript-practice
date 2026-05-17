// 1. Usa desestructuración para extraer los dos primeros elementos de un array

const numeros = [1, 2, 3, 4, 5]

const [primero, segundo] = numeros

console.log(primero) // Resultado: 1
console.log(segundo) // Resultado: 2 

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const [primero1 = 10, segundo1 = 20] = numeros
console.log(primero1)
console.log(segundo1)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    nombre: "Facundo Vazquez",
    edad: 35,
    trabajo: "Programador",
    email: "facu@gmail.com",
}

const {nombre, edad} = person
console.log(nombre)
console.log(edad)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
// a nuevas variables con nombres diferentes

const {nombre: nombre1, edad: edad1} = person
console.log(nombre1)
console.log(edad1)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person2 = {
    nombre: "Sol desia",
    edad: 28,
    profesion: {
        empresa: "Georgia",
        antiguedad: 15
    }
    
}

const {profesion: {empresa, antiguedad} } = person2 
console.log(empresa)
console.log(antiguedad)

// 6. Usa propagación para combinar dos arrays en uno nuevo

const myArray1 = [1, 2, 3, 4, 5]
const myArray2 = [6, 7, 8, 9, 10]

const myArray3 = [...myArray1, ...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array

const myArray4 = [...myArray1]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person3 = {...person, ...person2}
console.log(person3)

// 9. Usa propagación para crear una copia de un objeto

let person4 = {...person}
console.log(person4)

// 10. Combina desestructuración y propagación

const myArray5 = [1, 2, 3, 4, 5]
const [inicio] = myArray5
const myArray6 = [6, 7, 8, 9, 10]

const myArray7 = [...myArray5, inicio, 3]
console.log(myArray7)
