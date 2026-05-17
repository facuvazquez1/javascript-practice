// Herencia

// -------------------------- Creamos la superclase Animal --------------------------
class Animal {

    constructor(name){ // constructor: solo me pide el nombre y se hereda
        this.name = name
    }

    sound(){ // funcion: sonido de animal
        console.log("Emite un sonido generico.")
    }
        
}


// -------------------------- Creamos la clase Dog --------------------------

class Dog extends Animal { // con extends apuntamos a la clase del animal del cual queremos heredar


    run(){
        console.log("El perro corre")
    }

    sound(){
        console.log('guau') // redefinimos el comportamiento de la funcion sound() de animal
    }
}

let myDog = new Dog("MPOURDE")
console.log(myDog.name) // Resultado: MPOURDE
myDog.run() // El perro corre
myDog.sound() // guau


// -------------------------- Creamos la clase Fish --------------------------

class Fish extends Animal {

    constructor(name, size){  // sobre escribimos el contructor agregando la propiedad SIZE
        super(name) // se utiliza super, debido a que su super clase 'animal', ya tenia definido en su constructor el name, por eso se poner super(name)
        this.size = size
    }

    swim(){
        console.log("el pez nada")
    }
}

let myFish = new Fish("Ramirito", 10)
console.log(myFish.name) // Resultado: Ramirito
console.log(myFish.size) // Resultado: 10
myFish.sound() // Resultado: Emite un sonido generico. (lo hereda de la clase animal)
myFish.swim() // Resultado: el pez nada
// myFish.run() Resultado: esto dara error, porque run es propio del perro, no de la clase animal


// Metodos estaticos 

// Sirve cuando no necesitamos instanciar previamente la clase, como en los casos anteriores
class MathOperations {

    static sum(a, b){
        return a + b
    }

}

console.log(MathOperations.sum(5, 10)) // Resultado: 15
