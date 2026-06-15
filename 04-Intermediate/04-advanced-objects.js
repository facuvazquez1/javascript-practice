// Objectos avanzados 

// - Prototipos y Herencia

// Prototipos 

let person = {
    name: "Gaston",
    age: 37,
    greet(){
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__) // Resultado: [Object: null prototype] {}
console.log(Object.getPrototypeOf(person)) // [Object: null prototype] {}

person.sayAge = function(){
    console.log(`Tengo ${this.age} anios`)
}

console.log(person)
/* Resultado:
{
  name: 'Gaston',
  age: 37,
  greet: [Function: greet],
  sayAge: [Function (anonymous)]
}

*/
person.sayAge() // Rsultado: Tengo 37 anios


// - Herencia basada en prototipos

console.log("---------")

let programador = Object.create(person)
programador.lenguage = "Javascript"

console.log(programador) // Resultado: {} (vacio)
programador.greet()// Resultado: Hola, soy Gaston
programador.sayAge() // Resultado: Tengo 37 anios

// - Metodos estaticos y de instancia 

// Antiguamente como se declaraba una clase
 function Person (name, age) {
    this.name = name
    this.age = age
 }

 let new_person = new Person("Brais", 37)

 Person.prototype


 // - Metodos avanzados

 // assign

 let person_core = {name: "Facu"}
 let person_details = {age: 37, alias: "facuva"}

let fullPerson = Object.assign(person_core, person_details) // Combinacion de dos objetos
console.log(fullPerson) // Resultado: { name: 'Facu', age: 37, alias: 'facuva' }

// keys, values, entries

console.log(Object.keys(fullPerson)) // Resultado: [ 'name', 'age', 'alias' ]
console.log(Object.values(fullPerson)) // Resultado: [ 'Facu', 37, 'facuva' ]
console.log(Object.entries(fullPerson)) // Resultado: [ [ 'name', 'Facu' ], [ 'age', 37 ], [ 'alias', 'facuva' ] ]
