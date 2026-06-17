// Programacion asincrona

// Codigo sincrono

console.log("Inicio") // Inicio del programa

for(let i = 0; i < 1000000000; i++) { } // Tarda unos segundos mas en ejecutar esto

console.log("Fin") // Finaliza el programa demorando la espera de nuestro anterior for que recorre varios numeros

// Event Loop (Bucle de eventos)

// - Componentes del Event Loop
// 1. Call Stack (Pila de ejecucion)
// 2. Web APIs (APIs del navegador) o Node.js: setTimeOut()...
// 3. Task Queue (COla te tareas) y MicroTaskQueue

// ---- Flujo del Event Loop ----
// 1. Call Stack
// 2. Operaciones Asincronas -> Web APIs o Node.js
// 3. Operacion termina -> La coloca en Task Queue o MicroTask 
// 4. Si Call Stack esta vacio -> Mueve las tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// CallBacks
