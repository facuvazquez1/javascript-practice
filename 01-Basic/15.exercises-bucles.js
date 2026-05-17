// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (i = 0; i <= 20; i++) {
    console.log(`Numero: ${i}`)
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let contador = 0

for (i = 1; i <= 100; i++) {
    contador = contador + i // resumido: contador += 1
}

console.log(contador)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
  console.log(`Numero: ${i}`);
}
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const myArray = ["Facundo", "Solcito", "Juan", "Andrea"]

for (let nombres of myArray){
    console.log(nombres)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const myString = "Hola mi nombre es Facundo"
let contador1 = 0

for ( let vocales of myString){
    if (vocales === "a" || vocales === "e" || vocales === "i" || vocales === "o" || vocales === "u" )
    contador1++    
}
console.log(contador1)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const myArray2 = [1, 5, 6, 10]
let producto = 1

for (let number of myArray2){
    producto = producto * number
    
  
}
console.log(producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5



for (let i = 0; i <= 10; i++){
    let tabla = i * 5
    console.log(`5 x ${i} = ${tabla}`)

}


// 8. Usa un bucle para invertir una cadena de texto

let cadenaTexto = "Hola mi nombre es Facundo Vazquez"
let invertida = ""

for (let i = cadenaTexto.length -1; i >= 0; i--) {
    let letra = cadenaTexto[i]
    invertida += letra
}

console.log(invertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0
let b = 1

for (let i = 0; i < 10; i++) {
  console.log(a)
  const siguiente = a + b
  a = b
  b = siguiente
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const myArray3 = [1, 4, 5, 6, 10, 12, 15, 20]
const myArrayMayores = []

for (const mayores of myArray3) {
    if (mayores > 10) {
        myArrayMayores.push(mayores)
    }
}

console.log(myArrayMayores)