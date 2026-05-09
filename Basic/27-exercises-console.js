// 1. Crea una función que utilice error correctamente

function sumar(a, b){
    if (typeof a === "number" && typeof b === "number") {
        const resultadoSuma = a + b;
        console.log(resultadoSuma);
        return resultadoSuma;
    } else {
        console.error("Ingrese un numero.")
        return null;
    }
}

sumar(5, 5) // Resultado: 10 
sumar(5, "5") // Resultado: Ingrese un numero.

// 2. Crea una función que utilice warn correctamente


// 3. Crea una función que utilice info correctamente

// 4. Utiliza table

let tablaPais = [ //Array
    {name: "Argentina", lenguage: "espaniol", provincias: 54},
    {name: "Peru", lenguage: "espaniol", provincias: 20},
    {name: "Chile", lenguage: "espaniol", provincias: 32},
    {name: "Colombia", lenguage: "espaniol", provincias: 12}
]

console.table(tablaPais)

// 5. Utiliza group

console.group("Auto")
console.log("Modelo: Audi A3")
console.log("Anio: 1998")
console.log("Kilometraje: 40.000km")
console.log("Origen: Alemania")
console.groupEnd()

// 6. Utiliza time

console.time("tiempo de ejecucion 1")

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let number of myArray){
    console.log(number)
}

console.timeEnd("tiempo de ejecucion 1") // tiempo de ejecucion 1: 1.166ms


// 7. Valida con assert si un número es positivo

let number = -5;

console.assert(number > 0, "El numero debe ser positivo");

// 8. Utiliza count

console.count("click") // Resultado: click: 1
console.count("click") // Resultado: click: 2
console.count("click") // Resultado: click: 3
console.count("click") // Resultado: click: 4

// 9. Utiliza trace

function sumar2(a, b){

    console.trace("Seguimiento pila de ejecución");

    if (typeof a === "number" && typeof b === "number") {
        const resultadoSuma = a + b;
        console.log(resultadoSuma);
        return resultadoSuma;
    } else {
        console.error("Ingrese un numero.")
        return null;
    }
    
}

sumar2(10, 10)

// 10. Utiliza clear

// console.clear()