// Funciones 

// Una funcion es un bloque de codigo para realizar determinada accion 

// Inicializacion simple

function myFunc() {
    console.log("Hola esta es mi funcion")
}

// Con parametros

function myFuncionConParametros(name) {
    console.log(`Hola, ${name}`)
}

myFuncionConParametros("facu") // Salida: Hola, facu
myFuncionConParametros() // Salida: Hola, undefined

// Funciones anonimas, permiten asignarle a una variables/constante una funcion sin nombrarla

const myFuncion = function (name) {
        console.log(`Hola, ${name}`)
}

myFuncion("Facundo") // Resultado: Hola, Facundo

// arrow functions - se tiene que declarar como tambien se declaran las anonimas, con un let o const previamente 

const myFuncionArrow = (number) => {
    console.log(`Este es el numero: ${number}`)
}

myFuncionArrow(7) // uso de mi funcion arrow 

// podemos declararla todo en una sola linea y precindir de los corchetes
const myFunctionSaludo = (nombre) => console.log(`Mi nombre es ${nombre}`)

// Parametros de la funcion

function sum(a, b) {
    console.log(a + b)
}

sum(5, 6) // salida: 11



// Valores por defecto 

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

sum() // Resultado: NaN 



// Retorno de valores 

function mult(a, b) {
    return a * b
}

mult(1, 2) // no se imprime 
console.log(mult(1, 2)) // imprime 2


// funciones anidadas

function externa () {
    console.log("funcion externa")
    function interna() {
        console.log("Funcion interna")
    }
    interna() // la puedo llamar dentro de esta funcion dentro del scope 
}

externa() 
externa()
// interna() = interna no esta definido, por el scope 


// Funciones de orden superior 
// Son funciones que reciben otras funciones como argumento

function aplicarOperacion(a, b, operacion) {
  return operacion(a, b)
}

function sumar(x, y) {
  return x + y
}

const resultado = aplicarOperacion(5, 3, sumar)
console.log(resultado) // 8

// forEach 
// es una funcion que nos sirve para realizar bucles 

myArray = [1, 2, ,3 ,4 ,5]

myArray.forEach (function(valor) {
    console.log(valor)
})

myArray.forEach((valor) => console.log(valor))

