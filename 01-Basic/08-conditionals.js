// ---------- if, else if, else ----------

// if + else 

let age = 37

if (age >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad");
} 

// if + else if 

let age2 = 17

if (age2 >= 18) {
    console.log("Eres mayor de edad")
} else if (age2 >= 13) {
    console.log("Eres un adolescente")
} else if (age2 >= 30) {
    console.log("Eres un adulto")
} else {
    console.log("Eres un niño")
}

// operador ternario

const mensaje = age2 >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mensaje)

age2 == 17 ? console.log("Eres un adolescente") : console.log("No eres un adolescente")


// ---------- switch ----------    (cuando tenemos muchas condiciones, que evaluan una misma variable, es mejor usar un switch)

let dia = 0 
let diaNombre

switch (dia) {
    case 0:
        diaNombre = "Domingo"
        break
    case 1:
        diaNombre = "Lunes"
        break
    case 2:
        diaNombre = "Martes"
        break
    case 3:
        diaNombre = "Miércoles"
        break
    case 4:
        diaNombre = "Jueves"
        break
    case 5:
        diaNombre = "Viernes"
        break
    case 6:
        diaNombre = "Sábado"
        break
    default:
        diaNombre = "Día no válido"
}
console.log(`El día es: ${diaNombre}`)

