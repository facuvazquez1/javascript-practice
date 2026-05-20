// ### Bloque 2 (11-20) Arrays, bucles y funciones

// 11. Dado un array numérico, devolvé el primer y último elemento sin mutarlo.
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arrayNumber[0])
console.log(arrayNumber[arrayNumber.length -1])


// 12. Escribí función `contarMayoresA(array, limite)` que devuelva cuántos superan el límite.
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function contarMayores (array, limite){
    let contador = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > limite) {
            contador += 1
        }
    }
    return contador
}
console.log(contarMayores(listaNumeros, 5))

// 13. Dado un array, devolvé otro solo con strings (`typeof === "string"`).

let randomArray = [1, "Facundo", true, false, 2, "Monica", 3, "Alfredo", 90]

let stringArray = []

for (let i = 0; i < randomArray.length; i++){
    if (typeof randomArray[i] === "string") {
        stringArray.push(randomArray[i])
    }

}
console.log(stringArray)



// 14. Implementá `buscarPrimeroPar(array)` usando `find`.

let listaNumeros2 = [27, 23, 13, 15, 2000, 32, 101, 156]

function buscarPrimeroPar(array) {
    
    let numeroPar = array.find(numero => numero % 2 === 0)
    
    return numeroPar

}
console.log(buscarPrimeroPar(listaNumeros2))




// 15. Implementá `buscarIndicePrimeroPar(array)` usando `findIndex`.
array3 = [27, 23, 10, 23, 54, 34, 28]

function buscarIndicePrimeroPar(array){

    const numPar = array.findIndex((numero) => numero % 2 === 0)

    return numPar
}

console.log(buscarIndicePrimeroPar(array3))

// 16. Escribí `todosPositivos(array)` con `every`.
const array4 = [27, 23, 10, 23, 54, 34, 28]
const array5 = [-27, 23, 10, 23, 54, 34, 28]


function todosPositivos(array){


    const numPositivo = array.every(numero => numero > 0)

    return numPositivo

}

console.log(todosPositivos(array4)) // Resultado: true 
console.log(todosPositivos(array5)) // Resultado: false

// 17. Escribí `hayAlgunNegativo(array)` con `some`.

const array6 = [1, 2, 3, 4, -5, 6, 7, -8, 9, 10]

function hayAlgunNegativo(array) {

   const numNegativo = array.some(numero => numero < 0)

   return numNegativo

}

console.log(hayAlgunNegativo(array6)) // Resultado: true



// 18. Dado un array de números, obtené suma total con `reduce`.

const array7 = [72, 43, 23, 12, 19, 45, 32, 89, 91]

const sumaNumeros = array7.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(sumaNumeros)


// 19. Dado un array de strings, devolvelo ordenado alfabéticamente con `sort` (sin romper el original).

const arrayLetras = ["c", "f", "z", "a", "j", "w", "d", "i", "g"]

function ordenAlfabetico (array){
    const arrayOrdenado = [...array].sort()

    return arrayOrdenado

}

console.log(ordenAlfabetico(arrayLetras))



// 20. Hacé una función que reciba array y devuelva un objeto `{min, max, promedio}`.

const numeros = [10, 20, 30];

function obtenerEstadisticas(array){

    const min = Math.min(...array);
    const max = Math.max(...array);
    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    const promedio = suma / array.length;

    return {min, max, promedio}

}

console.table(obtenerEstadisticas(numeros))

