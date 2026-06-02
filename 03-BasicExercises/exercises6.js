// 20 Ejercicios de JavaScript — Nivel Intermedio
// > Basados en los temas del repositorio [hello-javascript de mouredev](https://github.com/mouredev/hello-javascript/tree/main/Basic)
// > Solo JS puro · Sin HTML ni CSS · Resultados por consola
// ---
// Ejercicio 1 — Analizador de contraseña
// Crea una función que reciba una contraseña como string y evalúe su fortaleza.
// Debe retornar e imprimir por consola: `"débil"`, `"media"` o `"fuerte"` según los criterios que definas (longitud, mayúsculas, números, símbolos).
// Pista: Usá operadores lógicos (`&&`, `||`), métodos de string como `.length` y expresiones regulares o bucles para verificar cada condición. Podés acumular un puntaje con una variable numérica.
// ---
// Ejercicio 2 — Conversor de temperatura con historial
// Escribí un programa que convierta temperaturas entre Celsius, Fahrenheit y Kelvin.
// Guardá cada conversión realizada en un array como objeto `{ de, a, valor, resultado }` e imprimí el historial completo al final.
// Pista: Usá un objeto o función con un `switch` para manejar los tipos de conversión. El historial es un array de objetos que podés recorrer con `forEach`.
// ---
// Ejercicio 3 — Contador de palabras y caracteres
// Dada una cadena de texto larga, imprimí por consola:
// Total de palabras
// Total de caracteres (sin espacios)
// La palabra más larga
// Cuántas veces aparece cada palabra (frecuencia)
// Pista: `.split(" ")` te da el array de palabras. Para la frecuencia, usá un objeto vacío `{}` como acumulador dentro de un bucle `for...of`. La palabra más larga se puede encontrar con `reduce`.
// ---
// Ejercicio 4 — Clasificador de números en un array
// Recibí un array de números y clasificalos en tres grupos: pares, impares y múltiplos de 3. Un número puede aparecer en más de un grupo.
// Imprimí cada grupo y también el promedio de cada uno.
// Pista: El operador módulo `%` es clave. Podés usar `filter` para obtener cada grupo y `reduce` para calcular el promedio.
// ---
// Ejercicio 5 — Generador de tabla de multiplicar dinámica
// Creá una función que reciba un número `n` y genere las tablas de multiplicar del 1 al `n`, pero solo imprima las filas donde el resultado sea mayor que un límite que también se pasa como parámetro.
// Pista: Necesitarás bucles anidados (`for` dentro de `for`). Usá template literals para formatear la salida: ``${i} x ${j} = ${i*j}``.
// ---
// Ejercicio 6 — Sistema de calificaciones
// Tenés un array de objetos con alumnos: `{ nombre, notas: [n1, n2, n3] }`.
// Calculá el promedio de cada alumno, asignale una calificación (Aprobado / Desaprobado / Sobresaliente) y mostrá un ranking ordenado de mayor a menor promedio.
// Pista: Usá `map` para transformar cada alumno agregando su promedio y calificación. Luego `.sort()` con una función comparadora para ordenar el array resultante.
// ---
// Ejercicio 7 — Validador de palíndromo mejorado
// Escribí una función que determine si una frase es un palíndromo, ignorando espacios, tildes, signos de puntuación y diferencias entre mayúsculas/minúsculas.
// Ejemplo: `"Anita lava la tina"` → `true`
// Pista: Primero limpiá el string: `.toLowerCase()`, `.replace()` con una regex para quitar lo que no es letra. Luego compará el string con su versión invertida (`.split("").reverse().join("")`).
// ---
// Ejercicio 8 — Simulador de carrito de compras
// Creá un objeto `carrito` con métodos para: agregar producto, eliminar producto, aplicar descuento porcentual y mostrar el resumen total.
// Los productos son objetos `{ nombre, precio, cantidad }`.
// Pista: El carrito puede ser un objeto con una propiedad `items` (array) y métodos como `agregar(producto)`, `eliminar(nombre)`, `aplicarDescuento(porcentaje)` y `resumen()`. Usá `reduce` para calcular el total.
// ---
// Ejercicio 9 — FizzBuzz extendido
// El clásico FizzBuzz pero con una vuelta de tuerca: en lugar de reglas fijas, recibí un array de reglas como objetos `{ divisor, etiqueta }` y aplicalas todas al rango del 1 al 100.
// Si un número cumple varias reglas, concatená las etiquetas.
// Pista: Iterá cada número con un bucle. Para cada número, recorrés el array de reglas con `forEach` y vas construyendo el string resultado. Si al final está vacío, mostrás el número.
// ---
// Ejercicio 10 — Aplanador y limpiador de arrays
// Dada una estructura de arrays anidados con valores mixtos (números, strings, `null`, `undefined`, booleanos), creá una función que:
// Aplane el array a un solo nivel
// Elimine valores falsy
// Elimine duplicados
// Ordene los números de menor a mayor y los strings alfabéticamente
// Pista: `.flat(Infinity)` aplana. `.filter(Boolean)` limpia los falsy. Para duplicados, `Set` es tu mejor amigo. Para ordenar, separá números y strings con `typeof`.
// ---
// Ejercicio 11 — Calculadora con historial usando closures
// Implementá una calculadora usando closures. La función `crearCalculadora()` debe retornar un objeto con métodos (`sumar`, `restar`, `multiplicar`, `dividir`, `historial`, `reiniciar`) que operen sobre un acumulador interno inaccesible desde afuera.
// Pista: El closure permite que las funciones internas accedan a variables de la función externa. El acumulador y el historial viven en el scope de `crearCalculadora` y no son accesibles directamente.
// ---
// Ejercicio 12 — Transformador de objetos
// Tenés un array de objetos con datos de usuarios en distintos formatos (algunos con `first_name/last_name`, otros con `nombre/apellido`, otros con `fullName`).
// Normalizalos todos al formato `{ id, nombreCompleto, email, activo }`.
// Pista: Usá `map` y dentro de cada iteración usá operadores ternarios o `||` para manejar los distintos casos. El operador de desestructuración `{ first_name, nombre, fullName }` puede ayudarte.
// ---
// Ejercicio 13 — Secuencia de Fibonacci con memoización
// Creá una función que calcule el n-ésimo número de Fibonacci de forma eficiente usando memoización (caché de resultados ya calculados).
// Comparar el tiempo que tarda con y sin memoización para `n = 40`.
// Pista: Usá un objeto `{}` o un `Map` como caché dentro de la función (o como variable externa). Antes de calcular, revisá si el resultado ya existe en la caché. Usá `console.time()` y `console.timeEnd()` para medir.
// ---
// Ejercicio 14 — Agenda de contactos
// Simulá una agenda de contactos con las operaciones: agregar, buscar por nombre (parcial), listar ordenados alfabéticamente, eliminar y actualizar.
// Los contactos son objetos `{ id, nombre, telefono, email }`.
// Pista: Guardá los contactos en un array. Para buscar por nombre parcial usá `.filter()` combinado con `.includes()` o `.toLowerCase()`. Generá los `id` automáticamente con una variable contador o con `Date.now()`.
// ---
// Ejercicio 15 — Analizador de texto estadístico
// Dado un texto largo, calculá e imprimí:
// Cantidad de oraciones (terminadas en `.`, `!` o `?`)
// Promedio de palabras por oración
// Las 5 palabras más frecuentes (excluyendo artículos y preposiciones cortas)
// Porcentaje de palabras únicas sobre el total
// Pista: Para separar oraciones, usá `.split()` con una regex que contemple `.`, `!` y `?`. Para las palabras frecuentes, construí un mapa de frecuencias y luego ordená por valor con `Object.entries()` + `.sort()`.
// ---
// Ejercicio 16 — Juego de dados con estadísticas
// Simulá 1000 lanzamientos de dos dados de 6 caras. Al finalizar, mostrá:
// Cuántas veces salió cada suma posible (2 al 12)
// Cuál fue la suma más frecuente
// El porcentaje de aparición de cada suma
// Pista: `Math.floor(Math.random() * 6) + 1` simula un dado. Usá un objeto como acumulador de frecuencias donde las claves son las sumas. Al final iterá con `for...in` o `Object.entries`.
// ---
// Ejercicio 17 — Árbol genealógico simple
// Modelá un árbol genealógico usando objetos anidados: cada persona tiene `nombre`, `edad` y opcionalmente un array `hijos` con la misma estructura.
// Creá funciones para: imprimir el árbol con indentación, buscar una persona por nombre y contar el total de integrantes.
// Pista: Este ejercicio requiere recursividad. Una función que llama a sí misma con cada hijo. La indentación se puede manejar pasando un parámetro `nivel` que incrementa en cada llamada recursiva, generando espacios con `" ".repeat(nivel * 2)`.
// ---
// Ejercicio 18 — Pipeline de transformaciones
// Implementá una función `pipeline(...funciones)` que reciba cualquier cantidad de funciones y retorne una nueva función que aplique todas en secuencia al valor inicial.
// Ejemplo de uso:
// ```js
// const procesar = pipeline(
//   x => x * 2,
//   x => x + 10,
//   x => `Resultado: ${x}`
// );
// console.log(procesar(5)); // "Resultado: 20"
// ```
// Pista: Usá el operador rest (`...funciones`) para capturar las funciones en un array. Luego `reduce` es la herramienta perfecta para aplicarlas en cadena, donde el acumulador es el valor transformado.
// ---
// Ejercicio 19 — Deduplicador inteligente de arrays de objetos
// Dado un array de objetos con posibles duplicados (mismo `id` o misma combinación de `nombre + email`), creá una función que elimine duplicados según una clave o combinación de claves que se pasa como parámetro.
// Pista: Podés usar un `Map` donde la clave sea el valor de la propiedad que define la unicidad. Recorrés el array con `forEach` y solo agregás al Map si la clave no existe. Al final, `Array.from(map.values())` te da el resultado.
// ---
// Ejercicio 20 — Mini intérprete de comandos
// Creá un sistema que reciba un array de instrucciones como strings y las ejecute en orden. Las instrucciones posibles son: `SET nombre valor`, `PRINT nombre`, `ADD nombre numero`, `IF nombre > numero PRINT mensaje`.
// Ejemplo:
// ```js
// const instrucciones = [
//   "SET edad 25",
//   "ADD edad 5",
//   "PRINT edad",              // → 30
//   "IF edad > 20 PRINT adulto" // → adulto
// ];
// ```
// Pista: Usá un objeto `variables = {}` como memoria. Para cada instrucción, usá `.split(" ")` para parsearla y un `switch` o `if/else if` según el primer token (`SET`, `PRINT`, `ADD`, `IF`). El mayor desafío es parsear el `IF`.
// ---
// > **Tip general:** Para correr estos ejercicios necesitás Node.js. Ejecutá cada archivo con `node nombre-archivo.js` desde la terminal.