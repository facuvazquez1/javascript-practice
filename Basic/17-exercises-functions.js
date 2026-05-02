
// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(a, b) {
    console.log(a + b)
}

sumar(5, 5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function arrayMayor(numeros) {
    return Math.max(numeros);
}

console.log(arrayMayor([1, 2, 3, 4, 5, 6]))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
    let contador = 0;
    const vocales = "aeiou";

    for(let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (vocales.includes(letra)) {
            contador++
        }
    }
    return contador;
}

console.log(contarVocales("aaaeeeiiiooouuu")); // Resultado: 15


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const myArray1 = ["facu", "sol", "monica", "matias"]

function arrayMayus(array){

    const newArray1 = []

    for( let i = 0; i < array.length; i++) {
        let mayus = array[i].toUpperCase()
        newArray1.push(mayus)
    }

    return newArray1
    
}

console.log(arrayMayus(myArray1))



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(number){
    if(number <= 1 ){
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) {
            return false
        }
        
    }

    return true

}

console.log(esPrimo(0))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const myArray2 = ["facu", "sol", "monica", "matias"]
const myArray3 = ["facu", "sol", "lucas", "juan"]

function arrayIguales(array1, array2) {

    const myNewArray = []

    for (let i = 0; i < array1.length; i++){
        if (array2.includes(array1[i])) {
           myNewArray.push(array1[i])
        }

    }

    return myNewArray

}

console.log(arrayIguales(myArray2, myArray3))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const myArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumArray (array) {

    let sumaTotal = 0

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            sumaTotal += array[i]
        }
    }

    return sumaTotal

}

console.log(sumArray(myArray4))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const myArray5 = [1, 2, 3, 4, 5,]

function arrayAlCuadrado (array){

    const arrayCuadrado = []

    for (let i = 0; i < array.length; i++){
        const numCuadrado = array[i] ** 2
        arrayCuadrado.push(numCuadrado)
    }

    return arrayCuadrado 

}

console.log(arrayAlCuadrado(myArray5))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadenaTexto ="Este texto esta al reves"

function cadenaInversa (texto) {
    
    return texto.split(" ").reverse().join(" ")


}

console.log(cadenaInversa(cadenaTexto))



// 10. Crea una función que calcule el factorial de un número dado

let numero = 5

function numFactorial (number){

    let resultadoFactorial = 1;

    for (let i = number; i >= 1; i--){
        resultadoFactorial *= i
    }

    return resultadoFactorial
}

console.log(numFactorial(numero))