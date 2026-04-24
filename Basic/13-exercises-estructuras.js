// 1. Crea un array que almacene cinco animales

listaAnimales = ["Perro", "Gato", "Caballo", "Toro", "Pez"];
console.log(listaAnimales);


// 2. Añade dos más. Uno al principio y otro al final

listaAnimales.unshift("Leon");
listaAnimales.push("Zebra");
console.log(listaAnimales);

// 3. Elimina el que se encuentra en tercera posición

listaAnimales.splice(2, 1) // posicion 2, base 0 = tercera posicion 
console.log(listaAnimales)

// 4. Crea un set que almacene cinco libros

listaSet = new Set (["El principito", "Rebelión en la granja", "La metamorfosis", "Siddhartha", "Carta al padre"])
console.log(listaSet)

// 5. Añade dos más. Uno de ellos repetido

listaSet.add("El viejo y el mar")
listaSet.add("Bartleby, el escribiente")
// listaSet.add("Bartleby, el escribiente") los sets no permiten agregar duplicados. 
console.log(listaSet)


// 6. Elimina uno concreto a tu elección

listaSet.delete("Bartleby, el escribiente")
console.log(listaSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

myMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap)

// 8. Comprueba si el mes 5 existe en el map e imprime su valor

console.log(myMap.has(5))
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

myMap.set("Verano", ["Enero", "Febrero", "Marzo"])
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

newArray = [1, 2, 3];
mySet = new Set(newArray)
myMap = new Map([
    ["Mapa", mySet]
])

console.log(myMap)

