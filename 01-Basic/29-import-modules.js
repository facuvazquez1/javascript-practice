// --------- Importacion de modulos ---------

// --------- Importacion ---------
import { add, PI, name, Circle } from "./28-export-modules.js"; // importamos exactamente por nombre 

// --------- Importacion por defecto ---------
import substract from "./28-export-modules.js"; // exporta por defecto pero solamente una cosa puede exportar por default ( es unica )
import resta from "./28-export-modules.js"; // podriamos darle el nombre que quisieramos


//  Funciones 
console.log(add(1, 5))

//  Propiedas 
console.log(PI)
console.log(name)

// Importacion por defecto (tiene que ser unica)
console.log(substract(5, 10))

// Clase
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))