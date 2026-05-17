// Clases 
// Tambien son objetos pero mas complejos, nos sirve para crear plantillas de objetos, damos las propiedas pero no sus valores. 



// Declaracion de clase sin valores definidos 
class Person {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Facu", 35, "vazquez1")
console.log(person) // Resultado: Person { name: 'Facu', age: 35, alias: 'vazquez1' }


// Valores por defecto

class DefaultPerson {

    constructor(name = "Default Name", age = 0, alias = "Sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaultPerson("Marcos")
console.log(person2) // Resultado: DefaultPerson { name: 'Marcos', age: 0, alias: 'Sin alias' }

// Aceeso a propiedas

console.log(person2.name) // Resultado: Marcos
console.log(person2.alias) // Resultado: Sin alias

// Asignar valor a una propiedad

person2.alias = "Facuvazquez1"
console.log(person2.alias) // Resultado: Facuvazquez1


// Funciones

class Person2 {

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

     walk() {
            console.log("la persona camina")
        }

}

let person3 = new Person2("marcos", 18, "moskl")
person3.walk()

// Propiedas privadas 

class PrivatePerson {

    #bank // declaramos la propiedad bank como privada

    constructor(name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay(){
        this.#bank
    }
}

let person7 = new PrivatePerson("facu", 18, "fac1", "1234ABC")
// console.log(person7.#bank) // no me permite acceder a la propiedad privada


// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name(){ // creo una funcion que retorne el nombre unicamente para que pueda llamarlo con person8.name
        return this.#name
    }

    set bank(newBank){ // El set nos permite, modificar la propiedas sin acceder a ella
        this.#bank = newBank
    }

   

   
}

let person8 = new GetSetPerson("Facu", 32, "fasd", "laspass")
console.log(person8)
console.log(person8.name)


person8.bank = "123412322"
console.log(person8.bank)


