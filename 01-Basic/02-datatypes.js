// Tipos de datos primitivos en JavaScript

// 01. String: representa texto. Se puede definir con comillas simples, dobles o backticks (template literals).
let myName = "Facundo Vazquez";
console.log(myName);

// 02. Number: representa números, tanto enteros como decimales. capacidad de 64 bits, con un rango de aproximadamente ±1.7976931348623157e+308 y una precisión de hasta 15 dígitos decimales.
let anios = 30;
console.log(anios);   

let altura = 19.99;
console.log(altura);

// 03. Boolean: representa un valor de verdad, que puede ser true o false.
let esEstudiante = true;
console.log(esEstudiante);

let esProfesor = false;
console.log(esProfesor);

// 04. Null: representa la ausencia intencional de cualquier valor. Es un valor asignable.
let valorNulo = null;
console.log(valorNulo);

// 05. Undefined: representa una variable que ha sido declarada pero no asignada a ningún valor.
let uninitializedVariable;
console.log(uninitializedVariable);

// 06. Symbol: representa un valor único e inmutable que se puede usar como identificador de propiedades de objetos.
let mySymbol = Symbol("id-123");
console.log(mySymbol);

// 07. BigInt: representa números enteros grandes que no pueden ser representados por el tipo Number. Capacaidad de representar números enteros más allá de 2^53 - 1. Se denota con una "n" al final del número. Podemos utilizar toda la memoria disponible en el sistema para almacenar números enteros grandes, lo que permite trabajar con números extremadamente grandes sin perder precisión.

let bigNumber = BigInt(900719925474099123132312312312313123131312313112312545095) 
console.log(bigNumber);

let bigNumber2 = 900719925474099123132312312312313123131312313112312545095n;
console.log(bigNumber2);


// Mostrar el tipo de dato de cada variable utilizando el operador typeof

console.log(typeof myName); // string

console.log(typeof anios); // number
console.log(typeof altura); // number

console.log(typeof esEstudiante); // boolean
console.log(typeof esProfesor); // boolean

console.log(typeof valorNulo); // object (esto es un comportamiento histórico de JavaScript, null se considera un objeto)

console.log(typeof uninitializedVariable); // undefined

console.log(typeof mySymbol); // symbol

console.log(typeof bigNumber); // bigint
console.log(typeof bigNumber2); // bigint   


