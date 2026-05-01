// 🧪 Ejercicios JavaScript — Consolidación ( unidad: 01–09)

// ==============================
// BLOQUE 1 — Lógica + Bucles
// ==============================

// 1. Mostrar números del 1 al 10
// Pista: usar un `for` con contador.

for (let i = 1; i <= 10; i++){
    console.log(`Numero: ${i}`)
}


// 2. Mostrar números del 10 al 1
// Pista: el contador debe decrementar.

for (let i = 10; i > 0; i--){
    console.log(`Numero: ${i}`)
}



// 3. Mostrar solo números pares del 1 al 20
// Pista: usar `% 2 === 0`.

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i)
    } 
}


// 4. Sumar números del 1 al 100
// Pista: usar una variable acumuladora (`total`).

let acumulador = 0

for (let i = 1; i <= 100; i++)  {
    acumulador = acumulador + i
}

console.log(acumulador)


// 5. Contar cuántos números son mayores a 50 (del 1 al 100)
// Pista: usar contador + `if`.

let contador = 0

for (let i = 1; i <= 100; i++) {
    if (i > 50){
        contador++
    }
}

console.log(contador)


// ==============================
// BLOQUE 2 — Arrays + Recorrido
// ==============================

// 6. Mostrar todos los elementos de un array
const frutas1 = ["manzana", "banana", "pera"];
// Pista: recorrer con `for` usando `.length`.

for (let i = 0; i < frutas1.length; i++){
    console.log(frutas1[i])
}

// 7. Mostrar solo frutas con más de 5 letras
const frutas2 = ["manzana", "banana", "pera", "kiwi"];
// Pista: usar `.length` del string.

for (let i = 0; i < frutas2.length; i++){
    if (frutas2[i].length > 5) {
        console.log(`frutas con mas de 5 letras: ${frutas2[i]}`)
    }
}


// 8. Contar cuántas frutas empiezan con "m"
const frutas3 = ["manzana", "banana", "melon", "mango"];
// Pista: acceder al primer carácter con `[0]`.

let contador1 = 0

for (let i = 0; i < frutas3.length; i++){
    if(frutas3[i][0] === "m"){
        contador1++
    }
}

console.log(contador1)

// 9. Crear un nuevo array con frutas en mayúsculas
const frutas4 = ["manzana", "banana", "pera"];
// Pista: usar `.toUpperCase()` + `push`.

const newFrutas4 = []

for (let i = 0; i < frutas4.length; i++){
    newFrutas4.push(frutas4[i].toUpperCase())
}

console.log(newFrutas4)



// 10. Sumar todos los números de un array
const nums1 = [10, 20, 30, 40];
// Pista: usar acumulador.

let contadorArray = 0

for (let i = 0; i < nums1.length; i++){
    contadorArray = contadorArray + nums1[i]
}

console.log(contadorArray)


// ==============================
// BLOQUE 3 — Lógica aplicada a Arrays
// ==============================

// 11. Obtener el número mayor de un array
const nums2 = [3, 10, 2, 8, 15];
// Pista: comparar con una variable `max`.

let max = nums2[0];

for (let i = 0; i < nums2.length; i++){
    if(nums2[i] > max) {
        max = nums2[i]
    }
}

console.log(max)

// 12. Obtener el número menor de un array
const nums3 = [3, 10, 2, 8, 15];
// Pista: misma lógica que el máximo.

let min = nums3[0];

for (let i = 0; i < nums3.length; i++){
    if(nums3[i] < min) {
        max = nums3[i]
    }
}

console.log(max)



// 13. Contar cuántos números son pares en un array
const nums4 = [1, 2, 3, 4, 5, 6];
// Pista: usar `% 2 === 0`.

let contadorPares = 0

for (let i = 0; i < nums4.length; i++){
    if(nums4[i] % 2 === 0) {
        contadorPares++;
    }
}

console.log(contadorPares)


// 14. Mostrar solo strings que contengan "a"
const palabras1 = ["hola", "mundo", "casa", "perro"];
// Pista: usar `.includes("a")`.

for (let i = 0; i < palabras1.length; i++) {
    if (palabras1[i].includes("a")) {
        console.log(palabras1[i])
    }
}


// 15. Invertir un array (sin usar `.reverse()`)
const nums5 = [1, 2, 3, 4];
// Pista: recorrer desde el final.

for (let i = nums5.length; i >= 0; i--){
    console.log(nums5[i])
}


// ==============================
// BLOQUE 4 — Nivel intermedio
// ==============================

// 16. Crear un array con números mayores a 10
const nums6 = [5, 12, 8, 20, 3];
// Pista: condición + `push`.

const nums6New = []

for (let i = 0; i < nums6.length; i++) {
    if (nums6[i] > 10) {
        nums6New.push(nums6[i])
    }
}

console.log(nums6New)


// 17. Contar palabras con más de 3 letras
const palabras2 = ["sol", "luna", "estrella", "mar"];
// Pista: `.length` del string.

contadorPalabras2 = 0

for (let i = 0; i < palabras2.length; i++){
    if (palabras2[i].length > 3) {
        contadorPalabras2++
    }
}

console.log(contadorPalabras2)


// 18. Eliminar duplicados (sin usar Set)
const nums7 = [1, 2, 2, 3, 4, 4, 5];
// Pista: verificar si ya existe antes de agregar.

const nums7New = []

for (let i = 0; i < nums7.length; i++){
    if (!nums7New.includes(nums7[i])) {
    nums7New.push(nums7[i]);
  }
}

console.log(nums7New)


// 19. Encontrar la primera palabra con más de 6 letras
const palabras3 = ["sol", "computadora", "mesa", "teclado"];
// Pista: usar `break`.
let encontrada = null

for (i = 0; i < palabras3.length; i++){
    if (palabras3[i].length > 6){
        encontrada = palabras3[i]
        break
    }
}

console.log(encontrada)



// 20. Dado un array, obtener:
// - suma total
// - cantidad de pares
// - cantidad de impares
const nums8 = [1, 2, 3, 4, 5, 6];
// Pista: usar múltiples acumuladores.

let sumaTotal = 0
let pares = 0
let impares = 0

for (let i = 0; i < nums8.length; i++){

    sumaTotal += nums8[i]

    if (nums8[i] % 2 === 0){
        pares++
    } else {
        impares++
    }
}

console.log(sumaTotal)
console.log(pares)
console.log(impares)




// ==============================
// Recomendación
// ==============================

// 1. Pensar la lógica sin código
// 2. Escribir pasos en comentarios
// 3. Implementar
// 4. Probar distintos casos
// 5. Explicar por qué funciona