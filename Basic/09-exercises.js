// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let miNombre = "Juan"
let nombreEsperado = "Facundo"

if (miNombre === nombreEsperado) {
    console.log(miNombre)
} else {
    console.log("Ese no es mi nombre.")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let user = "Facuvazquez1"
let password = "1234"

if (user === "Facuvazquez1" && password === "1234") {
    console.log("Has iniciado sesion correctamente.")
} else {
    console.log("Tus credenciales no son validas.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0

if (numero === 0) {
    console.log("El numnero es 0")
} else if (numero > 0){
    console.log("Es un numero positivo")
} else {
    console.log("Es un numero negativo")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 18 

if (age >= 18) {
    console.log("Usted puede votar.")
} else {
    let edadFaltante = 18 - age
    console.log(`Le faltan ${edadFaltante} anios para poder votar.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let edad = 18

let esMayor = edad >= 18 ? "adulto" : "menor"
console.log(esMayor)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 10

if (month === 12 || month === 1 || month === 2) {
    console.log("Es verano")
} else if (month === 3 || month === 4 || month === 5) {
    console.log("Es otonio")
} else if (month === 6 || month === 7 || month === 8) {
    console.log("Es invierno")
} else if (month === 9 || month === 10 || month === 11) {
    console.log("Es primavera")
} else {
    console.log("Mes invalido")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
    console.log("El mes selecionado tiene 31 dias")
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("El mes selecionado tiene 30 dias")
} else if (month === 2){
    console.log("Tiene 28 dias normales y 29 bisiesto")
} else {
    console.log("Mes invalido")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lenguage = "Chinese"
let saludo 

switch(lenguage) {
    case "Spanish": 
        saludo = "Hola"
        break
    case "English":
        saludo = "Hello"
        break
    case "Chinese":
        saludo = "Arigato"
        break
    case "French":
        saludo = "Wiwi"
        break
    default:
        saludo = "Idioma no valido"
}

console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mes = 3
let estacion 

switch(mes){
    case 1:
        estacion = "Verano"
    break
    case 2:
        estacion = "Verano"
    break
    case 3:
        estacion = "otoño"
    break
    case 4:
        estacion = "otoño"
    break
    case 5:
        estacion = "otoño"
    break
    case 6:
        estacion = "invierno"
    break
    case 7:
        estacion = "invierno"
    break
    case 8:
        estacion = "invierno"
    break
    case 9:
        estacion = "primavera"
    break
    case 10:
        estacion = "primavera"
    break
    case 11:
        estacion = "primavera"
    break
    case 12:
        estacion = "Verano"
    break
    default:
        estacion = "Mes invalido"
}

console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior


// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
//     console.log("El mes selecionado tiene 31 dias")
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log("El mes selecionado tiene 30 dias")
// } else if (month === 2){
//     console.log("Tiene 28 dias normales y 29 bisiesto")
// } else {
//     console.log("Mes invalido")
// }

let days 

switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = "Tiene 31 dias"
        break
    case 4:
    case 6:
    case 9:
    case 11:
        days = "Tiene 30 dias"
        break
    case 2:
        days = "Tiene 28 dias normales y 29 bisiesto"
        break
    default:
        days = "Mes invalido."
}

console.log(days)