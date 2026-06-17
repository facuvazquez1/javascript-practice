// ============================================================
// BLOQUE 1 — Sintaxis básica
// ============================================================

// 1. Reescribí esta función como arrow function manteniendo el mismo comportamiento.
//    Luego ejecutala y verificá que da el mismo resultado.

// function saludar(nombre) {
//     return `Hola, ${nombre}!`
// }

// console.log(saludar("Facu")) // Hola, Facu!

const saludar = (name) => `Hola, ${name}!`
console.log(saludar("facu"))

// -----------------------------------------------------------------------

// 2. Reescribí esta función como arrow function usando retorno implícito
//    (sin llaves ni return).

// function elevarAlCuadrado(numero) {
//     return numero * numero
// }

// console.log(elevarAlCuadrado(5)) // 25

const elevarAlCuadrado = (numero) => numero * numero 
console.log(elevarAlCuadrado(5)) 

// Cuando una arrow function tiene una sola expresión en el cuerpo y no usás llaves {}, 
// JavaScript entiende que esa expresión es lo que se devuelve. Por eso no hace falta escribir return.


// -----------------------------------------------------------------------

// 3. Reescribí esta función como arrow function.
//    Ojo: no recibe parámetros. ¿Cómo se escribe eso en una arrow?

// function obtenerFecha() {
//     return new Date().getFullYear()
// }

// console.log(obtenerFecha()) // el año actual

const obtenerFecha = () => new Date().getFullYear()
console.log(obtenerFecha())

// ============================================================
// BLOQUE 2 — Arrow functions como valores
// ============================================================

// 4. Creá una arrow function llamada `esMayorDeEdad` que reciba una edad
//    y retorne true o false. Guardala en una const.
//    Usá retorno implícito.

const esMayorDeEdad = edad => edad >= 18

console.log(esMayorDeEdad(17))

// 5. Creá una arrow function llamada `calcularDescuento` que reciba
//    un precio y un porcentaje, y retorne el precio final con el descuento aplicado.
//    Ejemplo: calcularDescuento(1000, 10) → 900

const calcularDescuento = (precio, porcentaje) => precio - precio * porcentaje / 100
console.log(calcularDescuento(900, 20))

// ============================================================
// BLOQUE 3 — Arrow functions con arrays
// ============================================================

// 6. Dado este array de precios, usá .map() con una arrow function
//    para crear un nuevo array donde cada precio tenga aplicado un 21% de IVA.
//    Mostrá el resultado redondeado a 2 decimales.

// const precios = [100, 250, 80, 430]

// 7. Dado este array de usuarios, usá .filter() con una arrow function
//    para quedarte solo con los que estén activos.

// const usuarios = [
//     { nombre: "Facu", activo: true },
//     { nombre: "Sol", activo: false },
//     { nombre: "Marcos", activo: true },
//     { nombre: "Laura", activo: false },
// ]

// 8. Usá .reduce() con una arrow function para calcular
//    el total de todos los precios del array `precios` del ejercicio 6
//    (sin IVA esta vez).

// ============================================================
// BLOQUE 4 — Casos particulares
// ============================================================

// 9. Creá una arrow function que reciba un array de strings
//    y retorne un nuevo array con cada string en mayúsculas
//    y sin espacios en los extremos.
//    Usá .map() con arrow function adentro.

// const entradas = ["  hola ", " MUNDO  ", "  facundo  "]

// 10. Encadenamiento: dado este array