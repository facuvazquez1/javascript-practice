// Desestructuracion 
// extraer datos de array y objetos y asignarlos a variables de manera consisa 


// Ejemplo de como asignamos valores a una variable normalemente 
myArray = [1, 2, 3, 4, 5]

let person = {
    name: "Facundo Vazquez",
    age: 39,
    email: "facu@hotmail.com"
}

myValue = myArray[1]
console.log(myValue) // Resultado: 2

let myName = person.name // Resultado: Facundo Vazquez


// ------------------------ Sintaxis en arrays ------------------------

let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5] = myArray
console.log(myValue0) // Resultado: 1
console.log(myValue1) // Resultado: 2
console.log(myValue2) // Resultado: 3
console.log(myValue3) // Resultado: 4
console.log(myValue4) // Resultado: 5
console.log(myValue5) // Resultado: undefined (no existe la posicion 0 en myArray)

// Sintaxis con valores predeterminados

let [myValue6 = 0 , myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0, myValue11 = 0] = myArray

console.log(myValue6) // Resultado: 1 (aunque asignamos valor preteterminado, el array si tiene un valor para esta posicion)
console.log(myValue7) // Resultado: 2
console.log(myValue8) // Resultado: 3
console.log(myValue9) // Resultado: 4
console.log(myValue10) // Resultado: 5
console.log(myValue11) // Resultado: 0 (porque definimos 0 como valor por defecto)

// ignorar elemntos del array

let [myValue12, , , ,myValue13] = myArray // los espacios vacios hacen ignorar los elemntos que se encuentren ahi 
console.log(myValue12) // Resultado: 1
console.log(myValue13) // Resultado: 5


// ------------------------ Sintaxis objetos ------------------------

let person1 = {
    name: "Facundo Vazquez",
    age: 39,
    email: "facu@hotmail.com"
}


// let { name, age, email } = person1
// console.log(name) // Ressultado: Facundo Vazquez
// console.log(age) // Ressultado: 39
// console.log(email) // Ressultado: facu@hotmail.com


// Sintaxis objetos con valores predeterminados 

// let { name, age, email = "nuevoemail@hotmail.com"} = person1 // los key dentro de los corchetes, tiene que ser la misma que el objeto
// console.log(name)
// console.log(email) // Resultado: nuevoemail@hotmail.com (Modificamos el valor del objeto)

// Sintaxis objetos con nuevos nombres de variables 

let { name: name3, age:age3, email:email3 } = person1
console.log(name3) // Ressultado: Facundo Vazquez
console.log(age3) // Ressultado: 39
console.log(email3) // Ressultado: facu@hotmail.com


// Propagacion (...)
let myArray2 = [...myArray] // copia 

let myArray3 = [...myArray, 6, 7, 8] // copia y agrega otros datos  

console.log(myArray2) // Resultado: [ 1, 2, 3, 4, 5 ]
console.log(myArray3) // Resultado: [ 1, 2, 3, 4, 5, 6, 7, 8] (Agrega 6, 7 y 8 al array)


// Combinacion de arrays 
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4) // myArray2 + myArray3

// sintaxis objetos

let person5 = {...person, anio: 1998}
console.log(person5)


// Copia de objetos 

let person5 = {...person}
console.log(person5)








