// 1. Captura una excepción utilizando try-catch

let person

try {
    console.log(person.name)
    console.log("Termina la ejecucion")
} catch (error){
    console.log("Se produjo un error")
    console.log(error.message) // captura el error y lo devuelve
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(person.name)
    console.log("Termina la ejecucion")
} catch (error){
    console.log("Se produjo un error")
    console.log(error.message) // captura el error y lo devuelve
} finally {
    console.log("Intentar de nuevo mas tarde...")
}


// 3. Lanza una excepción genérica

// throw new Error("Mensaje de error 505")

// 4. Crea una excepción personalizada

class ErrorEsMenorDeEdad extends Error { // Hereda de error 
    constructor(mensaje){
        super(mensaje);
        this.name = "ErrorEsMenorDeEdad" // Suele llevar un nombre tecnico igual al error
    }
}

// 5. Lanza una excepción personalizada

throw new ErrorEsMenorDeEdad("No puede ingresar: es menor de edad")

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personal

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10