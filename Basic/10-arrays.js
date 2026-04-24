// Estructura de datos: Arrays
// Nos permiten almacenar múltiples valores en una sola variable, y acceder a ellos mediante un índice. Son muy útiles para organizar y manipular datos relacionados entre sí.
// Un array es una colección de elementos ordenados, donde cada elemento tiene un índice asociado.


// 1. Declaración de un array
// Podemos declarar un array utilizando corchetes [] y separando los elementos por comas.

let myArray = [1, 2, 3, 4, 5]; // es mucho más común usar esta sintaxis para declarar un array en JavaScript
let myArray2 = new Array(1); // 

console.log(myArray); // salida: [ 1 ]
console.log(myArray2); // salida: [ <1 empty item> ]

// 2. Asignación de valores a un array

let myArray3 = ["Facundo", "Vazquez", 30, true]; // un array puede contener diferentes tipos de datos
myArray3[0] = "Juan"; 
myArray3[1] = "Gaston"
myArray3[4] = "Hola"; 
console.log(myArray3) // salida: [ 'Juan', 'Gaston', 30, true, 'Hola' ]

// 3. Metodos comunes de los arrays


// push(): agrega un elemento al final del array

myArrayVacio = []

myArrayVacio.push("Facu")
myArrayVacio.push("Vazquez")
myArrayVacio.push("Gaston")

console.log(myArrayVacio) // salida: [ 'Facu', 'Vazquez', 'Gaston' ]


// pop(): elimina el último elemento del array y lo devuelve

myArrayVacio.pop() // elimina "Gaston"
console.log(myArrayVacio.pop()) // salida: 'Gaston'
console.log(myArrayVacio) // salida: [ 'Facu', 'Vazquez' ]  


// shift(): elimina el primer elemento del array y lo devuelve

myArrayVacio.shift() // elimina "Facu"
console.log(myArrayVacio.shift()) // salida: 'Facu'
console.log(myArrayVacio) // salida: [ 'Vazquez' ]

// unshift(): agrega un elemento al inicio del array

myArrayVacio.unshift("Facu", "Gaston") // agrega "Facu" y "Gaston" al inicio del array
console.log(myArrayVacio) // salida: [ 'Facu', 'Gaston', 'Vazquez' ]

// length: devuelve la cantidad de elementos en el array

console.log(myArrayVacio.length) // salida: 3

// clear(): elimina todos los elementos del array

myArrayVacio = [] // asignamos un nuevo array vacío a la variable para limpiar el array
console.log(myArrayVacio) // salida: []

// slice(): devuelve una copia de una parte del array dentro de un nuevo array, sin modificar el array original

let myArray4 = [1, 2, 3, 4, 5];
let slicedArray = myArray4.slice(1, 4); // devuelve un nuevo array con los elementos desde el índice 1 hasta el índice 3 (el índice 4 no se incluye)
console.log(slicedArray) // salida: [ 2, 3, 4 ]
console.log(myArray4) // salida: [ 1, 2, 3, 4, 5 ] (el array original no se modifica)

// splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let myArray5 = [1, 2, 3, 4, 5];
myArray5.splice(2, 1); // elimina 1 elemento a partir del índice 2 (el número 3)
console.log(myArray5) // salida: [ 1, 2, 4, 5 ] (el número 3 ha sido eliminado)

myArray5.splice(2, 0, 3); // agrega el número 3 en el índice 2 sin eliminar ningún elemento
console.log(myArray5) // salida: [ 1, 2, 3, 4, 5 ] (el número 3 ha sido agregado nuevamente en el índice 2)

