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



// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10