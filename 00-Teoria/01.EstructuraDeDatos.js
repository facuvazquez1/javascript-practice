// Existen 4 tipos de estructuras de datos:
// Definicion: son las distintas formas de organizar y guardar información en un programa, elegidas según qué necesitás hacer con esos datos

// --------- Array ---------
// - Definicion: lista ordenada, permite duplicados. Se accede por índice numérico (array[0]).
const backlog = ["Elden Ring", "Hollow Knight", "GTA 5"];

console.log(backlog[0]);      // "Elden Ring" → el próximo a jugar
backlog.push("FIFA 26");      // se agrega al final
console.log(backlog.length);  // 4

// - Propiedades: length
// - Métodos: push(), pop(), shift(), unshift(), splice(), slice(), concat(), join(), reverse(), sort(), fill(), flat(), flatMap(), includes(), indexOf(), lastIndexOf(), find(), findIndex(), findLast(), findLastIndex(), filter(), map(), forEach(), reduce(), reduceRight(), some(), every(), at(), copyWithin(), entries(), keys(), values(), etc...



// --------------------------- Sets ---------------------------
// - Definicion: colección de valores únicos, sin duplicados.
const plataformas = new Set(["PC", "PS5", "PS5", "XBOX S"]);

console.log(plataformas.size);        // 3, no 4 → el duplicado se ignoró
console.log(plataformas.has("PS5"));  // true

// - Propiedades: size
// - Métodos: add(), delete(), has(), clear(), forEach(), entries(), keys(), values()



//  --------------------------- Maps ---------------------------
// - Definicion: pares clave-valor, pero la clave puede ser de cualquier tipo (no solo string).
const horasJugadas = new Map();
horasJugadas.set("Hollow Knight", 40);
horasJugadas.set("GTA 5", 120);

console.log(horasJugadas.get("GTA 5"));  // 120
console.log(horasJugadas.has("FIFA 26")); // false → todavía no lo jugaste

// Propiedades: size
// Métodos: set(), get(), delete(), has(), clear(), forEach(), entries(), keys(), values()



// --------------------------- Object ---------------------------
// Definicion: pares clave-valor con nombre. Se accede por propiedad (objeto.clave).
const eldenRing = {
  titulo: "Elden Ring",
  plataforma: "PS5",
  horas: 25,
  completado: false,
};

console.log(eldenRing.titulo);  // "Elden Ring"
eldenRing.horas = 30;           // actualizás una propiedad

// - Métodos estáticos: Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze(), Object.isFrozen(), Object.seal(), Object.isSealed(), Object.create(), Object.getPrototypeOf(), Object.setPrototypeOf(), Object.defineProperty(), Object.defineProperties(), Object.getOwnPropertyNames(), Object.getOwnPropertyDescriptor(), Object.fromEntries()
// - Métodos de instancia: hasOwnProperty(), isPrototypeOf(), toString(), valueOf()