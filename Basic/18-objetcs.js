
// Definicion: Un objeto en JavaScript es una estructura que agrupa datos y comportamiento en pares clave: valor (propiedades y métodos) para representar una entidad del mundo real. Puede contener funciones, es mejor para el modelado de identidades. 

// Si bien son similares con el Map, la diferencia es que el objeto está pensado para modelar entidades con propiedades, mientras que Map está diseñado como una colección de pares clave-valor más flexible y eficiente para operaciones dinámicas.

// Sintaxis 

let person = {
    name: "Facundo Vazquez",
    age: 37,
    alias: "facuvazquez1",
}

// Acceso a propiedades

//notacion punto
console.log(person.name) // Resultado: Facundo Vazquez

// notacion de corchetes
console.log(person["name"]) // Resultado: Facundo Vazquez


// Modificacion 
person.name = "Sol desia"
console.log(person.name) // Resultado: Sol desia 

// Eliminacion de propiedades
delete person.age // eliminamos age del objeto
console.log(person) 

// Nueva propiedad
person.email = "facu@gmail.com" // Agregamnos una nueva propiedad 
console.log(person)

// Metodos (funciones)
let person2 = {
    name: "Sol desia",
    age: 25,
    alias: "soldesia2025",
    camina: function(){
        console.log("La persona puede caminar")
    }
}

person2.camina()

// Anidacion de objetos 

let person3 = {
    name: "Sol desia",
    age: 25,
    alias: "soldesia2025",
    camina: function(){
        console.log("La persona puede caminar")
    },
    trabajo: { // objeto trabajo dentro de persona 3
        name: "programador",
        experiencia: 15,
        work: function(){ // funcion dentro del objeto trabajo
            console.log(`La persona de ${this.experiencia} anios trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.trabajo.name)  // Resultado: programador
person3.trabajo.work() // Resultado: La persona trabaja.

// Salida: 
// {
//   name: 'Sol desia',
//   age: 25,
//   alias: 'soldesia2025',
//   camina: [Function: camina],
//   trabajo: { name: 'programador', experiencia: 15, work: [Function: work] }
// }

// Igualdad de objetos 

let person4 = {
    name: "Facundo Vazquez",
    age: 37,
    alias: "facuvazquez1",
}


let person5 = {
    name: "Facundo Vazquez",
    age: 37,
    alias: "facuvazquez1",
}

console.log(person4)
console.log(person5)

console.log(person4 === person5) // Resultado: false (no se comparan los valores dentro, si no la posicion de memoria en la que estan guardados, por eso por mas que tengan los mismos valores, no son iguales)

console.log(person4.name === person5.name) // Resultado: true, al comparar directamente la propiedad, si podemos ver si un valor de un objeto es igual a otro. 

// Iteracion 
for (let key in person4){
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person (name, age){ // Deberia ser una clase, no es la mejor sintaxis 
    this.name = name
    this.age = age
}

let person6 = new Person("Facu", 18)
console.log(person6)


