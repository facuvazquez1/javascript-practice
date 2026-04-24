// Set 

// IMPORTANTE: no se puede a los elementos por un indice como en los arrays.
// La principal diferencia es que un set no permite elementos duplicados, mientras que un array sí. Tienen que ser exactamente iguales para ser considerados duplicados, es decir, el mismo tipo de dato y el mismo valor. Por ejemplo, el número 1 y la cadena "1" son considerados diferentes en un set, mientras que en un array pueden coexistir como elementos distintos.
// Además, los sets no tienen un orden específico, mientras que los arrays mantienen el orden de los elementos. 

// Declaracion

let mySet = new Set()

// Inicializacion con valores

mySet = new Set(["Facundo", "Vazquez", "Gaston"]) 

console.log(mySet) // salida: Set(3) { 'Facundo', 'Vazquez', 'Gaston' }

// Metodos comunes de los sets

// add(): agrega un elemento al set

mySet.add("Facundo") // no se agrega porque ya existe en el set
mySet.add("Juan") // se agrega al set
console.log(mySet) // salida: Set(4) { 'Facundo', 'Vazquez', 'Gaston', 'Juan' }

// delete(): elimina un elemento del set y devuelve true si se eliminó, o false si el elemento no existía

mySet.delete("Vazquez") // elimina "Vazquez" del set
console.log(mySet) // salida: Set(3) { 'Facundo', 'Gaston', 'Juan' }

// has(): devuelve true si el elemento existe en el set, o false si no existe

console.log(mySet.has("Facundo")) // salida: true
console.log(mySet.has("Vazquez")) // salida: false

// size: devuelve la cantidad de elementos en el set

console.log(mySet.size) // salida: 3

// Convertir un set a un array

let myArrayFromSet = Array.from(mySet) // convierte el set a un array
console.log(myArrayFromSet) // salida: [ 'Facundo', 'Gaston', 'Juan' ]


// convertir un array a un set

let mySetFromArray = new Set(myArrayFromSet) // convierte el array a un set
console.log(mySetFromArray) // salida: Set(3) { 'Facundo', 'Gaston', 'Juan' }

// 

