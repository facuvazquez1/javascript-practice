 // 1. Crea una clase que reciba dos propiedades

 class Person {

    #alias  // 8. Modifica la clase con getters y setters para que use propiedades privadas
    #cvu

    constructor(name, age, cvu, alias){
        this.name = name 
        this.age = age
        this.#cvu = cvu
        this.#alias = alias
        
    }

    presentation(){  // 2. Añade un método a la clase que utilice las propiedades
        console.log(`Mi nombre es ${this.name} y tengo ${this.age} anios. ALIAS: ${this.#alias}`)
    }

    static isValidEmail(email){  // 4. Añade un método estático a la primera clase

        return email.includes("@")

    }

    get cvu (){
        return this.#cvu
    }

    set alias(newAlias){
        this.#alias = newAlias
    }

}

 // 3. Muestra los valores de las propiedades e invoca a la función
 let myPerson1 = new Person("Facundo", 26, "9230293201", "facvaz12")

console.log(myPerson1.name) // Resultado: Facundo
console.log(myPerson1.age) // Resultado: 26
myPerson1.presentation() // Resultado: Mi nombre es Facundo y tengo 26 anios.


 // 5. Haz uso del método estático

console.log(Person.isValidEmail("facu@gmail.com")) // Resultado: TRUE 

 // 6. Crea una clase que haga uso de herencia

 class Estudiante extends Person {

    constructor(name, age, cvu, alias, carrera){
        super(name, age, cvu, alias)
        this.carrera = carrera
    }

    presentation(){  // 10. Sobrescribe un método de una clase que utilice herencia
        console.log(`Hola, estudio la carrera de  ${this.carrera}`)
    }


 }
 // 7. Crea una clase que haga uso de getters y setters
 // 9. Utiliza los get y set y muestra sus valores
 console.log(myPerson1.cvu) 
 myPerson1.alias = "flavio23"
//  console.log(myPerson1.alias) // Resultado: UNDEFINED (esto se debe a que con SET, no puedo hacer llamado a #alias, solo lo modifico)

 let myPerson2 = new Estudiante("Facundo", 32, "123131", "adsasda", "Programacion")
 myPerson2.presentation()
 console.log(myPerson2.cvu)



 

 // 10. Sobrescribe un método de una clase que utilice herencia