# TP de práctica — Parte A: Manipulación del DOM

## Antes de empezar

Vas a crear, para cada ejercicio, tu propio `index.html` + `script.js` (podés armar una carpeta `ejercicio-1/`, `ejercicio-2/`, etc., o reutilizar el mismo par de archivos y comentar/descomentar código — como te resulte más cómodo en VS Code).

**La idea general del DOM:** el HTML que ves en pantalla no es un texto fijo — es un árbol de objetos vivos que JavaScript puede leer y modificar. `document` es la puerta de entrada a ese árbol. Todo lo que hagamos en esta parte es: **buscar** un elemento, **crear** uno nuevo, o **cambiarle** algo (texto, estilo, clase) a uno que ya existe.

---

## Ejercicio 1 — Buscar y modificar (sin crear nada nuevo)

**Objetivo:** entender `getElementById` / `querySelector` y las propiedades básicas de un elemento.

**HTML sugerido:**
```html
<h1 id="titulo">Texto original</h1>
<p class="descripcion">Otro texto</p>
<button id="boton-cambiar">Cambiar</button>
```

**Consigna:** al hacer click en el botón, cambiá el texto del `<h1>` y el color de fondo del `<p>`.

**Pista:** `document.getElementById("titulo")` te devuelve el elemento. `.textContent = "..."` le cambia el texto. `.style.backgroundColor = "..."` le cambia el estilo. `document.querySelector(".descripcion")` es una alternativa que busca por selector CSS (útil cuando no tenés un id).

**Cómo probar:** abrí el HTML en el navegador, apretá el botón, verificá que cambien ambos elementos.

---

## Ejercicio 2 — Crear elementos desde cero

**Objetivo:** el trío `createElement` → configurar → `appendChild`.

**HTML sugerido:**
```html
<div id="contenedor"></div>
<button id="boton-agregar">Agregar párrafo</button>
```

**Consigna:** cada vez que apretás el botón, agregá un nuevo `<p>` dentro del `<div>`, con un texto distinto cada vez (por ejemplo, que incluya un número que va subiendo).

**Pista:** `document.createElement("p")` crea el elemento (todavía no existe en la página). `.textContent = "..."` le pone contenido. `contenedor.appendChild(elemento)` lo inserta al final del contenedor. Para el número que sube, necesitás una variable afuera de la función del click que se vaya incrementando.

**Cómo probar:** apretá el botón varias veces y verificá que se van acumulando párrafos, no que se reemplaza el anterior.

---

## Ejercicio 3 — Recorrer un array y dibujarlo (el patrón clave)

**Objetivo:** el patrón "por cada dato del array, un elemento en el DOM" — es la base de cualquier lista dinámica.

**HTML sugerido:**
```html
<ul id="lista-frutas"></ul>
```

**JS de partida:**
```js
const frutas = ["Manzana", "Banana", "Naranja", "Pera"];
```

**Consigna:** recorré el array `frutas` y creá un `<li>` por cada una, insertándolos todos dentro del `<ul>`.

**Pista:** `frutas.forEach((fruta) => { ... })` te da acceso a cada elemento uno por uno. Adentro repetís el trío del Ejercicio 2 (`createElement` → `textContent` → `appendChild`), usando `fruta` en vez de un texto fijo.

**Cómo probar:** deberían aparecer 4 elementos de lista, uno por cada fruta del array, en el mismo orden.

---

## Ejercicio 4 — Vaciar y re-dibujar (el "re-render")

**Objetivo:** entender por qué se limpia todo antes de volver a dibujar, en vez de ir agregando sin parar.

**HTML sugerido:** el mismo `<ul id="lista-frutas"></ul>` más un botón `<button id="boton-random">Nueva lista al azar</button>`.

**Consigna:** al apretar el botón, elegí 3 frutas al azar del array original y volvé a dibujar la lista **desde cero** (sin que queden mezcladas las viejas con las nuevas).

**Pista:** antes de volver a hacer el `forEach`, necesitás borrar lo que había: `lista.innerHTML = ""`. Después repetís el mismo `forEach` del Ejercicio 3. Para elegir al azar podés usar `Math.random()` combinado con `Math.floor()` para sacar un índice válido del array.

**Por qué importa:** esto es exactamente lo que hace `renderTodos()` en cualquier lista dinámica (to-do list, carrito de compras, feed de posts). Nunca "editás" un elemento puntual del DOM para que coincida con el array — borrás todo y volvés a dibujar desde el array. Así el DOM nunca se desincroniza de los datos.

---

## Ejercicio 5 — Eventos sobre elementos creados dinámicamente

**Objetivo:** agregar un botón "Eliminar" a cada `<li>` que creás, y que funcione aunque el elemento no existía cuando arrancó la página.

**HTML sugerido:** el mismo `<ul id="lista-frutas"></ul>`, sin botón de random esta vez.

**Consigna:** al dibujar cada `<li>` de una fruta, agregale también un botón "X" que, al hacer click, elimine **ese** `<li>` puntual de la pantalla.

**Pista:** dentro del `forEach`, además de crear el `<li>`, creá un `<button>` con `createElement("button")`, ponele texto "X", metelo adentro del mismo `<li>` con `li.appendChild(boton)`. Al botón agregale `boton.addEventListener("click", () => { li.remove() })`. Como el botón se crea *adentro* del mismo bloque donde tenés la referencia al `li`, no hace falta buscarlo de nuevo — ya lo tenés a mano por *closure* (una variable de afuera que la función de adentro puede seguir usando).

**Cómo probar:** cada botón "X" debería eliminar solo su propia fruta, no otra.

---

## Ejercicio 6 — Toggle de clase (marcar/desmarcar)

**Objetivo:** `classList.toggle`, y distinguir el click en un elemento del click en su hijo.

**CSS sugerido:**
```css
.tachado { text-decoration: line-through; color: gray; }
```

**Consigna:** sobre la misma lista de frutas (con su botón "X" del ejercicio anterior), hacé que al hacer click en el TEXTO del `<li>` se tache/destache alternadamente, sin que interfiera con el click del botón "X".

**Pista:** `li.classList.toggle("tachado")` agrega la clase si no la tiene, y la saca si ya la tiene — no necesitás llevar vos el estado de "está tachado o no". Para que el click en el botón "X" no dispare también el toggle del `<li>` (porque el botón está *adentro* del `<li>`, y los eventos "burbujean" hacia arriba), podés usar `evento.stopPropagation()` dentro del handler del botón.

---

## Ejercicio 7 — Formulario sin recargar la página

**Objetivo:** el patrón exacto que vas a usar en cualquier TP con formularios: `submit` + `preventDefault`.

**HTML sugerido:**
```html
<form id="form-tarea">
  <input type="text" id="input-tarea" placeholder="Escribí algo" required>
  <button type="submit">Agregar</button>
</form>
<ul id="lista-tareas"></ul>
```

**Consigna:** al enviar el formulario, agregá el texto del input como un nuevo `<li>` en la lista, sin que la página recargue, y limpiando el input después.

**Pista:** `form.addEventListener("submit", (evento) => { evento.preventDefault(); ... })` — esa línea de `preventDefault` tiene que ser de las primeras dentro de la función, antes de hacer cualquier otra cosa. Después leés `input.value` (ojo: es `.value`, no `.textContent`, porque es un input, no un elemento de texto fijo). Al final, `input.value = ""` para limpiar el campo.

---

# TP de práctica — Parte B: LocalStorage

## Antes de empezar

**La idea general:** `localStorage` es un espacio de almacenamiento del navegador que persiste entre recargas de página (a diferencia de tus variables normales, que se "olvidan" apenas recargás con F5). Solo guarda **texto** — nada de arrays, objetos ni números directamente. Por eso vas a necesitar convertir tus datos a texto antes de guardarlos (`JSON.stringify`), y reconstruirlos al leerlos (`JSON.parse`).

---

## Ejercicio 1 — Guardar y leer un string simple

**Objetivo:** el par básico `setItem` / `getItem`, sin JSON todavía (porque un string no necesita convertirse).

**HTML sugerido:**
```html
<input type="text" id="input-nombre" placeholder="Tu nombre">
<button id="boton-guardar">Guardar</button>
<p id="saludo"></p>
```

**Consigna:** al apretar el botón, guardá el nombre escrito en localStorage. Al cargar la página (aunque hayas recargado con F5), si hay un nombre guardado, mostralo en el `<p>` como saludo.

**Pista:** `localStorage.setItem("nombre", input.value)` para guardar. `localStorage.getItem("nombre")` para leer — te devuelve el string guardado, o `null` si nunca guardaste nada. Este código de "leer al cargar" va afuera de cualquier función, para que se ejecute apenas se carga el script.

**Cómo probar:** escribí tu nombre, guardá, recargá la página con F5 — el saludo debería seguir ahí sin que hayas hecho nada más.

---

## Ejercicio 2 — Guardar un número (y el problema de los strings)

**Objetivo:** ver con tus propios ojos por qué `localStorage` te devuelve siempre texto, incluso si guardaste un número.

**HTML sugerido:**
```html
<p>Contador: <span id="contador">0</span></p>
<button id="boton-sumar">+1</button>
```

**Consigna:** un contador que suma 1 en cada click, y que mantiene su valor después de recargar la página.

**Pista:** al guardar, `localStorage.setItem("contador", contador)` (JavaScript convierte el número a string solo). Al leer, `localStorage.getItem("contador")` te da un STRING como `"5"`, no el número `5` — si intentás sumarle 1 directamente vas a obtener algo raro tipo `"51"` (concatenación de texto) en vez de `6`. Necesitás convertirlo con `Number(...)` antes de usarlo en una cuenta. Si nunca guardaste nada, `getItem` da `null` — contemplá ese caso para arrancar en 0.

**Cómo probar:** sumá varias veces, recargá, seguí sumando — el número tiene que seguir la cuenta correctamente, no empezar a concatenar texto raro.

---

## Ejercicio 3 — Guardar un array de strings

**Objetivo:** primer contacto con `JSON.stringify` / `JSON.parse`.

**HTML sugerido:**
```html
<input type="text" id="input-color" placeholder="Un color">
<button id="boton-agregar-color">Agregar</button>
<ul id="lista-colores"></ul>
```

**Consigna:** cada color que escribas y agregues se guarda en un array, ese array se persiste en localStorage, y al recargar la página se recupera y se dibuja la lista completa (combinando lo que aprendiste en la Parte A, Ejercicio 3).

**Pista:** tu estado es `let colores = []`. Al guardar: `localStorage.setItem("colores", JSON.stringify(colores))` — convierte el array entero a un string tipo `["rojo","azul"]`. Al cargar la página: `JSON.parse(localStorage.getItem("colores"))` reconstruye el array real desde ese string. Ojo: si `getItem` devuelve `null` (primera vez que se abre la página), `JSON.parse(null)` te da `null`, no un array vacío — necesitás algo como `JSON.parse(localStorage.getItem("colores")) || []` para cubrir ese caso.

---

## Ejercicio 4 — Guardar un array de objetos (el paso final antes del TP real)

**Objetivo:** exactamente el patrón que vas a usar en la to-do list real: array de objetos, con `id`, persistido completo.

**HTML sugerido:**
```html
<input type="text" id="input-nota" placeholder="Una nota">
<button id="boton-agregar-nota">Agregar</button>
<ul id="lista-notas"></ul>
```

**Consigna:** cada nota que agregues se guarda como un objeto `{ id, texto }` dentro de un array. El array completo se persiste en localStorage en cada cambio. Cada `<li>` de la lista tiene un botón "Eliminar" que saca esa nota específica del array (buscándola por `id`), vuelve a guardar, y vuelve a dibujar.

**Pista:** para generar un `id` simple y único, podés usar `Date.now()` (te da un número distinto cada vez, basado en la hora exacta) en vez de llevar un contador aparte. Para eliminar por id, `array.filter((nota) => nota.id !== idAEliminar)` te devuelve un array nuevo sin esa nota — no hace falta buscar el índice manualmente. Después de cada cambio al array (agregar o eliminar), repetís siempre la misma secuencia: **modificar el array → guardar en localStorage → volver a renderizar**. Ese orden de 3 pasos es el que vas a repetir en cada función de tu TP real.

---

## Cómo saber si terminaste esta parte

Si resolviste el Ejercicio 4 de la Parte B sin mirar la pista, ya tenés el 90% de la lógica del TP real de la facu resuelta conceptualmente — lo único que cambia es el nombre de las funciones (`agregarTodo`, `eliminarTodo`, `toggleTodo`, `renderTodos`) y que las tareas tienen además una propiedad `completada`.
