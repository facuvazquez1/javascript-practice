// Herencia

class Animal {

    constructor(name){
        this.name
    }

    sound(){
        console.log("Emite un sonido generico.")
    }
        
}

class Dog extends Animal {

    run(){
        console.log("El perro corre")
    }
}

let myDog = new Dog("MPOURDE")
myDog.run()
myDog.sound()