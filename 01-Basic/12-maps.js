// Map o Diccionario

// Declaracion

let myMap = new Map()
console.log(myMap) // Resultado: Map(0) {}

// Inicializacion

myMap = new Map([
    ["name", "Facundo"],
    ["email", "facu@gmail.com"],
    ["Age", 27],
    ["EsMayor", true]
])

console.log(myMap)

/* Salida:

Map(4) {
  'name' => 'Facundo',
    'email' => 'facu@gmail.com',
  'Age' => 27,
  'EsMayor' => true
 } 

*/

// Metodos y propiedades

// Set

myMap.set("Alias", "facuvazquez1") // podemos agregar una nueva clase + valor
myMap.set("name", "Solcito") // podemos remplazar un dato existeste 
console.log(myMap)

// get 

console.log(myMap.get("name"))
console.log(myMap.get("Age"))

// has (comprobacion si existe una clave)

console.log(myMap.has("surname")) // Resultado: false
console.log(myMap.has("name")) // Resultado: true 

// Delete - eliminamos la clave seleccionada

myMap.delete("email")
console.log(myMap)

// Clear 

myMap.clear()
console.log(myMap) // elimina todo el mapa, Map(0) {}

// Propiedades 

myMap2 = new Map([
    ["name", "Sol"],
    ["email", "asadadasda@gmail.com"],
    ["Age", 24],
    ["EsMayor", false]
])

// Keys - retorna el listado de todas las claves del mapa

console.log(myMap2.keys()) // Resultado: [Map Iterator] { 'name', 'email', 'Age', 'EsMayor' }

// Values 

console.log(myMap2.values()) // Resultado: [Map Iterator] { 'Sol', 'asadadasda@gmail.com', 24, false }

// Size - retorna el tamanio de los elemntos del mapa

console.log(myMap2.size) // Resultado: 4

// Entries - retora todas las clave valor

console.log(myMap2.entries()) 
// Resultado:
// [Map Entries] {
//   [ 'name', 'Sol' ],
//   [ 'email', 'asadadasda@gmail.com' ],
//   [ 'Age', 24 ],
//   [ 'EsMayor', false ]
// }




