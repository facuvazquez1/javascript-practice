// Bucles 

// for - se ejecuta segun lo lanzamos

for (let i = 0; i <= 5; i++) { // for (inicio; condición; incremento)
    console.log(`Hola, buenos dias. ${i}`);
}

// Ejemplos

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) { // for (inicio; condición; incremento)
    console.log(`Elemento de mi lista: ${numbers[i]}`);
}

// While 

let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// do while 

i = 6

do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


// for of - recorres valores de algo que sea interable 

let myArray = [1, 2, 3, 4, 5]

mySet = new Set(["Facundo", "Vazquez", "Gaston"]) 

myMap = new Map([
    ["name", "Facundo"],
    ["email", "facu@gmail.com"],
    ["Age", 27],
    ["EsMayor", true]
])

mySrting = "Hola Javascript"


for (let valor of myArray) {
    console.log(valor)
}


for (let valor of mySet) {
    console.log(valor)
}


for (let valor of myMap) {
    console.log(valor)
}

for (let valor of mySrting) {
    console.log(valor)
}

// Buenas practicas

// break y continue 

for (let i = 0; i < 10; i++) { // for (inicio; condición; incremento)
    if (i == 5) {
        continue
    } else if (i == 8) {
        break
    }
    console.log(`Hola, buenos dias. ${i}`);
}

