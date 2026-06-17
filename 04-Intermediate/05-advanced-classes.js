// Clases avanzadas

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Brais", 37)
person.greet() // Resultado: Hola, soy Brais

console.log(person)

// creamos una funcion por fuera de la clase, anteriormente se usaba asi
person.sayAge = function(){
    console.log(`Tengo ${this.age} anios`)
}

person.sayAge() // Tengo 37 anios

// Clases abstractas
// Definicion: es una clase que no puede utilizarse como instancia directamente, si no que seran usadas por otras clases especializadas.

class Animal {
    constructor(name){
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound(){
        throw new Error("Este metodo tiene que ser implementado por la subclase")
    }
}

// Demotracion del error: 
// const animal = new Animal("Mou")
// console.log(animal) Error: No se pued einstanciar una clase abstracta


// Polimorfismo
// Implementar metodos con un mismo nombre pero con comportamientos distintos

class Cat extends Animal {
    makeSound(){
        console.log("Miau")
    }

}

class Dog extends Animal {
    makeSound(){
        console.log("Guau")
    }
}

const cat = new Cat("FacuCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("FacuDog")
console.log(dog)
dog.makeSound()

// - Mixins 
// es una tecnica para compartir diferentes funcionalidades en js sin recurris a herencias 

// const VolarMixing = {
//     fly(){
//         console.log(`Esta volando`)
//     }
// }

// class Bird extends Animal {
   
// }
// class Dragon extends Animal {
    
// }

// Object.assign(Bird, VolarMixing) 

// const bird = new Bird("Pajaro Loco")
// console.log(bird.name)
// bird.fly()

// const dragon = new Bird("DragonFire")
// console.log()


// Singleton - patrones de disenio 
// Los patrones de disenio son ciertas convenciones que nosotros podemos seguir para resolver problemas comunes.
// Que problema intenta resolver? asegurarse de que una clase solo se puede instanciar una unica vez. 

class Session {
    constructor(name){
        if(Session.instance){
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }

}

const session1 = new Session("Brais Moure")
const session2 = new Session()

console.log(session1.name)
console.log(session2.name)

