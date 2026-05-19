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
// 16. Escribí `todosPositivos(array)` con `every`.
// 17. Escribí `hayAlgunNegativo(array)` con `some`.
// 18. Dado un array de números, obtené suma total con `reduce`.
// 19. Dado un array de strings, devolvelo ordenado alfabéticamente con `sort` (sin romper el original).
// 20. Hacé una función que reciba array y devuelva un objeto `{min, max, promedio}`.