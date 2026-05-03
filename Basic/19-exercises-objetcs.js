// 1. Crea un objeto con 3 propiedades

let auto = {
    modelo: 205,
    marca: "Jeep",
    anio: 2016,
}

// 2. Accede y muestra su valor

console.log(auto.modelo)
console.log(auto.marca)
console.log(auto.anio)

// 3. Agrega una nueva propiedad

auto.color = "Blanco"


// 4. Elimina una de las 3 primeras propiedades

delete auto.modelo
console.log(auto)

// 5. Agrega una función e invócala

auto.seMueve = function movimiento() {
    console.log("el auto se mueve")
}

auto.seMueve()

// 6. Itera las propiedades del objeto

for (let key in auto) {
    console.log(key)
}



// 7. Crea un objeto anidado

auto.motor = {
    serial: 9092031,
    marca: "honda",
    anio: 2016,
}

console.log(auto)

// 8. Accede y muestra el valor de las propiedades anidadas


console.log(auto.motor.serial)
console.log(auto.motor.marca)


// 9. Comprueba si los dos objetos creados son iguales

let moto = {
    modelo: "honda",
    anio: 2016,
}

moto === auto // siempre dara false porque dos objetos comparan el objeto y los objetos no pueden ser nunca iguales porque ocupan un espacio de memoria distinto.



// 10. Comprueba si dos propiedades diferentes son iguales

console.log(moto.anio === auto.anio) // Resultado: true 

