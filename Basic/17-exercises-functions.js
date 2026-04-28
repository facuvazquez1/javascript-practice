
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

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado