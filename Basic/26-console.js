// Console 

// --------- log ---------
console.log("Hola Javascript")

// --------- error (rojo) ---------
console.error("Este es un mensaje de error")
console.error("Este es un mensaje de error", new Error("Fallo la conexion"))

// --------- warm (amarillo) ---------
console.warn("Este es un mensaje de advertencia")

// info 
console.info("Este es un mensaje de informacion adicional.")

// --------- table ---------

let data = [
    {name: "facu", age: 37},
    {name: "sol", age: 20}
]

console.table(data) 

// resultado:
// ┌─────────┬────────┬─────┐
// │ (index) │ name   │ age │
// ├─────────┼────────┼─────┤
// │ 0       │ 'facu' │ 37  │
// │ 1       │ 'sol'  │ 20  │
// └─────────┴────────┴─────┘


// --------- group ---------

console.group("Usuario:") // Inicia el grupo con group
console.log("Nombre: Facundo")
console.log("Edad: 37")
console.groupEnd() // Finaliza el grupo con groupEnd

// Resultado:
// Usuario:
//   Nombre: Facundo
//   Edad: 37


// --------- time ---------

console.time("Tiempo de ejecucion 1") // a partir de este punto empieza el conteo de tiempo de ejecucion 

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecucion 1") // timeEnd debe tener el mismo nombre que el console.time inicial 


console.time("Tiempo de ejecucion 2") 

for(let i = 0; i < 10000; i++){

}

console.timeEnd("Tiempo de ejecucion 2") 

// Resultado: Tiempo de ejecucion 1: 0.197ms
// Resultado: Tiempo de ejecucion 2: 0.223ms

// --------- assert ---------

let age = 18
console.assert(age >= 18, "El usuario debe ser mayor de edad")
// Resultado: no imprime nada en consola, porque es true la condicion

let age2 = 10
console.assert(age2 >= 18, "El usuario debe ser mayor de edad")
// Resultado: Assertion failed: El usuario debe ser mayor de edad

// --------- count ---------

console.count("click") // Resultado: click: 1
console.count("click") // Resultado: click: 2
console.count("push") // Resultado: push: 1
console.count("click") // Resultado: click: 3
console.count("push") // Resultado: push: 2
console.count("click") // Resultado: click: 4

// Contabiliza
// click: 1, 2, 3, 4
// push: 1, 2 

console.countReset("click") // Reseteamos "click" a 0
console.count("click") // Resultado: click: 1

// --------- trace ---------

// Manera de rastrear la pila de ejecucion 

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecucion")

}

funcA()

// clear
// console.clear() limpia la consola









