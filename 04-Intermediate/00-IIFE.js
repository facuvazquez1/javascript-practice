// IIFE (Expresion de funcion invocada inmediatamente)

// IIFE clasico 

// Importante: es importante que todo el codigo que venga arriba de el IIFE tenga ";" dado que de lo contrario, la funcion no se invocara de forma automatica porque tomara como contexto todo lo anterior. 

function saludar() {
    console.log("Hola")
}

saludar(); // <---- punto y coma de la invocacion de esta funcion para no generar conflicto con el IIFE

(function () { 
    console.log("IIFE Clasico")
})();

// IIFE con arrow function 

(() => {
    console.log("IIFE con arrow function")
})();