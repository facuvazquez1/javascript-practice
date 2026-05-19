// ## 30 ejercicios progresivos 

// ### Bloque 1 (1-10) Fundamentos rápidos
// 1. Declará 3 variables (`const`, `let`, `var`) y explicá en comentarios cuándo usarías cada una.
// const = la usaria cuando tengo que guardar un valor que se que no mutara a lo largo de mi programa. Por ejemplo PI, siempre vale lo mismo, por lo tanto lo guardare en una constante.
// let = let es para guardar un valor que puede ser modificado a lo largo del programa, lo usaria en todos los casos que exeptuen un valor constante.
// var = var era la forma antigua de declarar variables. Hoy se evita porque no tiene scope de bloque, permite redeclaraciones y puede generar errores difíciles de detectar. En JavaScript moderno se prefiere usar let o const. 

// 2. Dado un valor cualquiera, imprimí su tipo con `typeof` y si es falsy/truthy.
let dato = "hola"
console.log(typeof(dato))

if (dato){
    console.log("es truthy")
} else {
    console.log("es falsy")
}


// 3. Convertí un `string` numérico a número y validá con `Number.isNaN`.
let textNumber = "lol"
let number = Number(textNumber)

console.log(number)

if (Number.isNaN(number)) {    
    console.log("No es un numero valido.")
} else {
    console.log("Es un numero valido.")
}
// IMPORTANTE: NaN es el único valor en JavaScript que no es igual a sí mismo. NaN != NaN

// 4. Escribí una expresión ternaria que devuelva `"par"` o `"impar"` para un número.
let number2 = 2

let verificacionPar = number2 % 2 === 0 ? "par" : "impar"
console.log(verificacionPar) 


// 5. Dado un texto con espacios extra, limpiarlo con `trim()` y mostrar longitud antes/después.
let spaceText = "  hola buenos dias mi nombre es facundo   "
console.log(spaceText.length) // Resultado: 42
console.log(spaceText.trim().length) // Resultado: 37 


// 6. Verificá si un email contiene `"@"` y termina en `".com"` usando `includes` + `endsWith`.

let email = "facv98@yahoo.com"


if (email.includes("@") && email.endsWith(".com")) {
    console.log("Email valido.") 
} else {
    console.log("Email invalido.")
}

// 7. Dado un nombre completo, separarlo en array con `split(" ")`.
let userName = "Marcelo Gallardo Florentino Perez Alvarado"
console.log(userName.split(" ")) // Cada vez que encuentre un espacio pone la coma


// 8. Uní un array de palabras en una frase con `join(" ")`.

let arrayName = ["Belgrano", "Huracan", "Boca", "River"]
console.log(arrayName.join(" "))

// 9. Escribí un `if` que compare `==` y `===` con dos valores y explique diferencia.

let numberTwo = "5"

if(numberTwo === 5){
    console.log("No son iguales porque compara valor y tipo.")
} else if (numberTwo == 5){
    console.log("son iguales porque JavaScript convierte el string 5 a número.")
}


// 10. Dado un número del 1 al 7, devolver día de semana con `switch`.

let day = 5

switch(day){
    case 1: 
    console.log("Lunes");
    break;
    
    case 2: 
    console.log("Martes");
    break;

    case 3: 
    console.log("Miercoles");
    break;

    case 4: 
    console.log("Jueves");
    break;

    case 5: 
    console.log("Viernes");
    break;

    case 6: 
    console.log("Sabado");
    break;

    case 7: 
    console.log("Domingo");
    break;

    default:
        console.log("Dia invalido")

}




