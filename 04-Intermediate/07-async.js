// Programacion asincrona

// Codigo sincrono

// console.log("Inicio") // Inicio del programa

// for(let i = 0; i < 1000000000; i++) { } // Tarda unos segundos mas en ejecutar esto

// console.log("Fin") // Finaliza el programa demorando la espera de nuestro anterior for que recorre varios numeros

// Event Loop (Bucle de eventos)

// - Componentes del Event Loop
// 1. Call Stack (Pila de ejecucion)
// 2. Web APIs (APIs del navegador) o Node.js: setTimeOut()...
// 3. Task Queue (COla te tareas) y MicroTaskQueue

// ---- Flujo del Event Loop ----
// 1. Call Stack
// 2. Operaciones Asincronas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en Task Queue o MicroTask 
// 4. Si Call Stack esta vacio -> Mueve las tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// - CallBacks

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta despues de 2 segundos")
}, 2000)

console.log("Fin")


// - Problema: Callback Hell
// Cuando tenemos varios callbacks que dependen de otros callbacks, esto puede volverse bastante complejo de mantener y revisar, por ello es aconsejable ver otro tipo de metodo.
function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
    
})

// - Promesas

const promise = new Promise((resuelto, rechazado) => {
    setTimeout(() => {
        const ok = false
        if (ok) {
            resuelto("Operacion exitosa.")
        } else {
            rechazado("Se ha producido un error.")
        }
    }, 4000)
})

promise.then(resultado => { // nos notifica si esta promesa se cumplio
    console.log(resultado)
}).catch(error => { // si la promesa no se cumple
    console.log(error)
}).finally(() => {
    console.log("Esto se ejecuta siempre que se ponga.")
})

console.log("Fin del programa")

// - Encadenamiento de promesas 

function step1Promise() {
    return new Promise(resuelto => {
        setTimeout(() => {
            console.log("Paso 1 completado")
            resuelto()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resuelto => {
        setTimeout(() => {
            console.log("Paso 2 completado")
            resuelto()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resuelto => {
        setTimeout(() => {
            console.log("Paso 3 completado")
            resuelto()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completado")
    })


// - Async/Await 

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del programa")

    await wait(5000)
    console.log("Proceso despues de 5 segundos")

    await wait(6000)
    console.log("Proceso despues de 6 segundos")

    await wait(7000)
    console.log("Proceso despues de 7 segundos")

    console.log("Fin de todos los procesos conn ASYNC")
    
}

process()
