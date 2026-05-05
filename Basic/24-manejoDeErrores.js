// Exepcion

// // Produce una exepcion 
let myObjetc
// console.log(myObjetc.email)

// Tratamiento de errores 

// ------------ try-catch ------------

try { 
    // intenta ejecutar el error 
    console.log(myObjetc.email) 
    console.log("Finaliza la ejecucion.") // no se ejecuta
} catch {
    // Bloque de error
    console.log("Se a producido un error.")
}


// ------------ Captura del error ------------

try { 
    // intenta ejecutar el error 
    console.log(myObjetc.email) 
} catch (error){
    // Bloque de error
    console.log("Se a producido un error:", error.message) // Resultado: Se a producido un error: Cannot read properties of undefined (reading 'email')
}

// ------------ Finally ------------

try { 
    console.log(myObjetc.email) 
} catch (error){
    console.log("Se a producido un error:", error.message)
} finally{
    // se ejecuta lo que diga si o si
    console.log("Este codigo se ejecuta siempre")
}

// ------------ Lanzamiento de errores - THROW ------------

// throw new Error("ERROR 505: se detuvo el sistema") // TypeError - 

function sum(a, b){
    if ( a instanceof Number || b instanceof Number){
        console.log()
    }

    return a + b
}

console.log(sum(5, 10))

// Capturar varios tipos de errores

// Crear exepciones personalizados 

class MyCustomError extends Error {
    constructor (message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
}