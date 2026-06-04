// # Ejercicios de JavaScript: Objetos, Clases y Herencia

// ## 1. Objeto estudiante
// Creá un objeto que represente a un estudiante.
// Debe tener datos personales, una lista de notas y un método que calcule el promedio general.

let student = {
    name: "Marcos",
    surname: "Falcon",
    age: 22, 
    notes: [6, 4, 10, 7, 5],
    average: function () {
        let sum = 0
        for(let i = 0; i < this.notes.length; i++){
            sum += this.notes[i]

        }

        const promedio = sum / this.notes.length
        return promedio
    },

}
console.log(student.average())

// ## 2. Objeto producto
// Creá un objeto que represente un producto de una tienda.
// Debe tener nombre, precio, stock y un método para vender cierta cantidad, validando si hay stock suficiente.

let product = {
    name: "Playstation 5",
    brand: "Sony",
    releaseDate: "26/10/2018",
    weight: 57,
    price: 1500000,
    stock: 10,
    sell: function(number) {
        if (this.stock >= number) {
           this.stock -= number
        } else {
            console.log(`No hay stock disponible. Stock actual: ${this.stock}`)
        }
    },

}
product.sell(10)
console.log(product.stock)

// ## 3. Filtrar productos disponibles
// Creá una función que reciba un array de productos y devuelva solo aquellos que tengan stock disponible.
const listProduct = [
    {
        name: "Banana",
        price: 400,
        stock: 0,
    },
    {
        name: "Naranja",
        price: 250,
        stock: 2,
    },
    {
        name: "Manzana",
        price: 195,
        stock: 9,
    },
    {
        name: "Frutilla",
        price: 800,
        stock: 0,
    },
]

function availableStock (productos) {
    let listAvailableStock = []
    for(let i = 0; i < productos.length; i++) {
        if (productos[i].stock > 0) {
            listAvailableStock.push(productos[i])
        }

    }
    return listAvailableStock
}

console.log(availableStock(listProduct))

// ## 4. Buscar usuario por email
// Creá una función que reciba un array de usuarios y un email.
// La función debe devolver el usuario que coincida con ese email.

let users = [
    {
        name: "facu1",
        email: "facu1@hotmail.com"
    },
    {
        name: "marcos1",
        email: "marcos1@hotmail.com"
    },
    {
        name: "flavio",
        email: "flavio1@hotmail.com"
    }
]

function userSearch (array, email) {
    for(let i = 0; i < array.length; i++){
        if (array[i].email === email) {
            return array[i]
        } 
    } 
    return null
}

console.log(userSearch(users, "flavio1@homail.com"))

// ## 5. Clase Persona
// Creá una clase que represente una persona.
// Debe tener propiedades básicas y un método que devuelva una presentación con sus datos.

class Person {

    constructor(name, surname, age, email, country) {
        this.name = name
        this.surname = surname
        this.age = age
        this.email = email
        this.country = country
    }

    presentation() {
        return `Buenos dias, mi nombre es ${this.name} ${this.surname}, tengo ${this.age} anios y vivo en ${this.country}. Mi contacto es ${this.email}`
    }

}

let person1 = new Person("Facundo", "Vazquez", 32, "facu@hotmail.com", "Argentina")
console.log(person1.presentation())

// ## 6. Clase Producto
// Creá una clase que represente un producto.
// Debe permitir aplicar descuentos, aumentar stock y vender unidades, validando que haya stock suficiente.

class Product {

    constructor(name, price, stock){
        this.name = name
        this.price = price
        this.stock = stock
    }

    addStock(cantidad){
        return this.stock += cantidad
    }

    sell(cantidad){
        if (this.stock >= cantidad) {
            return this.stock -= cantidad
        }
        return null
    }

    applyDiscount(porcentaje){
        this.price -= this.price * porcentaje / 100
        return this.price
    }

}

// Creamos nuevo producto
let product1 = new Product("pan", 100, 10)
console.log(product1)

// Probamos agregar stock
product1.addStock(6)
console.log(product1.stock)

// Probamos comprar producto
product1.sell(5)
console.log(product1.stock)

// Probamos descuento producto
product1.applyDiscount(10)
console.log(product1.price)



// ## 7. Clase Cuenta Bancaria
// Creá una clase que represente una cuenta bancaria.
// Debe permitir depositar dinero, retirar dinero y consultar el saldo actual.
// También debe validar que no se depositen o retiren montos inválidos.

class AccountBank {
    
    constructor(cliente, cvu, alias, saldo){
        this.cliente = cliente
        this.cvu = cvu
        this.alias = alias
        this.saldo = saldo
    }

    ingresarSaldo(monto){
        if(typeof monto === "number" && monto > 0){
            this.saldo += monto
            return this.saldo

        }
        return null
    }

    retirarSaldo(monto){
        if(typeof monto === "number" && monto <= this.saldo ) {
            this.saldo -= monto
            return this.saldo
        }
        return null
    }

    consultarSaldo(){
        return this.saldo
    }



}


// Creamos una nueva cuenta 
let accountBank1 = new AccountBank("Facundo Vazquez", "923181290319", "vfg9829", 100)

// Probamos ingresar saldo
accountBank1.ingresarSaldo(20)
console.log(accountBank1.saldo)

// Probamos retira saldo con manejo de error al ingresar un monto invalido 
accountBank1.retirarSaldo(45);
if (accountBank1.consultarSaldo() === null) {
    console.log("Monto invalido.");
} else {
    console.log(`Saldo actual: ${accountBank1.consultarSaldo()}`);
}


// Consultar saldo
console.log(accountBank1.consultarSaldo())

// ## 8. Herencia entre Animal y Perro
// Creá una clase base que represente un animal.
// Luego creá una clase perro que herede de animal y sobrescriba el comportamiento del sonido.

// ## 9. Herencia entre Empleado y Desarrollador
// Creá una clase base que represente un empleado.
// Luego creá una clase desarrollador que herede de empleado y agregue información sobre el lenguaje de programación que utiliza.

// ## 10. Sistema simple de cursos
// Creá una clase que represente un curso.
// El curso debe permitir agregar estudiantes, mostrar la lista de estudiantes y consultar la cantidad total de estudiantes inscriptos.