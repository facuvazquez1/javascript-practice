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


// - Herencia

let programador = Object.create(person)
console.log(programador) // Resultado: {} (vacio)
console.log(programador.greet()) // Resultado: undefined
