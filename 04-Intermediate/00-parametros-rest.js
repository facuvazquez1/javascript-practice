// Parametros Rest (...)


function sum(...numbers) { // Genra un array nuevo con los "..."
    console.log(numbers)
}

sum(1, 2, 3, 4, 5) // Resultaod: [ 1, 2, 3, 4, 5 ] => se ingreso una lista de numeros, y el "..." genero un array de forma automatica cuando impprimimos el valor


function suma(...numeros) {
    let resultado = 0
    for (let numero of numeros){
        resultado += numero
    }
    return resultado
}

console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // Resultado: 55
console.log(suma(1, 2, 3)) // Resultado: 6

// Cuando se suele utilizar ? cuando no sabes cuantos parametros vamos a tener que ingresar en la funcion, en vez de poner suma(a, b, c, d, e), ponemos en remplazo: suma(...numeros)