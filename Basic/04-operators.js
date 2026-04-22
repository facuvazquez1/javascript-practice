// Operadores 


// ----------------- Operadores Aritméticos ---------------------
let a = 10;
let b = 5;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponenciación (a elevado a la b)

a++ // Incremento (a = a + 1)
console.log(a); // Ahora a es 11

a-- // Decremento (a = a - 1)
console.log(a); // Ahora a es 10


// ----------------- Operadores de Asignación ---------------------

let myVariable = 10; // Asignación simple

myVariable += 5; // Equivale a myVariable = myVariable + 5
console.log(myVariable); // Ahora myVariable es 15

myVariable -= 3; // Equivale a myVariable = myVariable - 3
console.log(myVariable); // Ahora myVariable es 12

myVariable *= 2; // Equivale a myVariable = myVariable * 2
console.log(myVariable); // Ahora myVariable es 24

myVariable /= 4; // Equivale a myVariable = myVariable / 4
console.log(myVariable); // Ahora myVariable es 6

myVariable %= 5; // Equivale a myVariable = myVariable % 5
console.log(myVariable); // Ahora myVariable es 1

myVariable **= 3; // Equivale a myVariable = myVariable ** 3
console.log(myVariable); // Ahora myVariable es 1   


// ----------------- Operadores de Comparación ---------------------

console.log(a == b); // Igualdad (compara valores)
console.log(a === b); // Estrictamente igual (compara valores y tipos)
console.log(a != b); // Desigualdad (compara valores)
console.log(a !== b); // Estrictamente desigual (compara valores y tipos)
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que

// ------ Truthy y Falsy (valores falsos en contextos booleanos) ----

0 == false // true (0 se convierte a false)

0 === false // false (diferentes tipos: number vs boolean)

"5" === 5 // false (diferentes tipos: string vs number) 

1 === true // false (diferentes tipos: number vs boolean)

0 === " " // false (diferentes tipos: number vs string)

undefined === null // false (diferentes tipos: undefined vs object)

// --------------------- Operadores lógicos (AND, OR, NOT) ---------------------

// AND (&&)

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false   

// OR (||)

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT (!)
console.log(!true); // false
console.log(!false); // true

console.log(!(true || true)); // false 

// --------------------- Operadores ternarios ---------------------

const estaLloviendo = true;

estaLloviendo ? console.log("Lleva un paraguas") : console.log("No necesitas paraguas"); // Si estaLloviendo es true, se ejecuta la primera parte, si es false, se ejecuta la segunda parte.    

