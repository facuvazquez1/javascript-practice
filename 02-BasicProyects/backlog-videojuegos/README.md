¡Vamos con ese, Facu! Te dejo la consigna detallada y autocontenida, en el mismo estilo que las que ya tenés en `02-BasicProyects/`, así la copiás tal cual a tu PDF y podés seguirla sin depender del chat.

---

## Proyecto Integrador 1 — Backlog de Videojuegos (consola)

### Objetivo
Construir un pequeño sistema en consola para administrar tu backlog de videojuegos (juegos por jugar, jugando y completados), practicando el manejo de **arrays de objetos de forma inmutable**. La idea central: **ninguna función modifica el array original ni los objetos existentes; siempre devuelven datos nuevos.**

### Temas que practicás
Arrays de objetos · `map` · `filter` · `find` · `sort` · inmutabilidad con spread (`...`) · destructuring · arrow functions · template literals · funciones con retorno.

### Modelo de datos
Cada juego es un objeto con esta forma:

```
{
  id,          // number, único
  titulo,      // string
  plataforma,  // string ("PC", "PS5", "Switch", etc.)
  genero,      // string
  horas,       // number (horas jugadas)
  completado,  // boolean
  puntaje      // number del 1 al 10 (0 si todavía no lo puntuaste)
}
```

### Datos de ejemplo (semilla)
Arrancá con un array de 5–6 juegos ya cargados a mano, para tener con qué probar. Por ejemplo (podés inventar los tuyos):

```
const backlog = [
  { id: 1, titulo: "Hollow Knight", plataforma: "PC", genero: "Metroidvania", horas: 40, completado: true, puntaje: 9 },
  { id: 2, titulo: "Elden Ring", plataforma: "PS5", genero: "Souls", horas: 25, completado: false, puntaje: 0 },
  // ...seguí vos
];
```

### Funciones mínimas a implementar
Todas reciben la lista como parámetro y **devuelven** un resultado (no imprimen por dentro, salvo que la consigna lo pida). Fijate bien qué devuelve cada una:

1. **`agregarJuego(lista, juego)`** → devuelve un **nuevo array** con el juego agregado al final. El original queda intacto.
2. **`marcarCompletado(lista, id)`** → devuelve un **nuevo array** donde el juego con ese `id` pasa a `completado: true`, sin mutar el objeto original.
3. **`filtrarPorPlataforma(lista, plataforma)`** → devuelve solo los juegos de esa plataforma.
4. **`filtrarCompletados(lista, completado)`** → devuelve los juegos según su estado (`true` o `false`).
5. **`buscarPorTitulo(lista, texto)`** → devuelve los juegos cuyo título **contenga** ese texto, ignorando mayúsculas/minúsculas (búsqueda parcial).
6. **`ordenarPorPuntaje(lista)`** → devuelve la lista ordenada de mayor a menor puntaje, **sin romper el orden del original**.
7. **`top3(lista)`** → devuelve los 3 juegos con mejor puntaje.
8. **`horasTotales(lista)`** → devuelve el total de horas jugadas sumando todos los juegos.

### Reglas clave (la parte que importa)
- **No usar `push`, `splice`, ni reasignar propiedades** (`juego.completado = true`) sobre el array o los objetos originales.
- Para agregar → copiá el array con spread y sumá el nuevo elemento.
- Para actualizar un objeto dentro del array → recorré con `map` y, cuando encuentres el `id`, devolvé una **copia** del objeto con el cambio; los demás los devolvés tal cual.
- Cada función debe poder ejecutarse dos veces seguidas y dar el mismo resultado (porque no ensucia nada).

### Retos para investigar por tu cuenta
- Cómo actualizar **un objeto puntual dentro de un array** sin mutarlo (combinación de `map` + spread). Este es EL patrón de React, así que vale la pena pelearlo.
- Cómo hacer que `sort` no altere el array original (pista: `sort` muta… ¿cómo evitás eso *antes* de ordenar?).
- Búsqueda parcial de texto ignorando mayúsculas.

### Pista para iniciar
Empezá por lo más simple y probá cada función con un `console.log` apenas la termines:
1. `horasTotales` (repasás `reduce` o un bucle simple).
2. `filtrarPorPlataforma` y `buscarPorTitulo` (puro `filter`).
3. Recién después metete con `agregarJuego` y `marcarCompletado`, que son las que exigen inmutabilidad.

### Se considera "terminado" cuando
- Todas las funciones devuelven lo esperado.
- Podés demostrar (con dos `console.log` del array original antes y después) que **ninguna función lo modificó**.
- Mostrás el backlog final con `console.table`.

---

Cuando lo tengas armado (o si te trabás en alguna función puntual), pegame tu código o decime qué archivo del repo mirar y lo revisamos juntos, función por función.

Si querés, también te lo dejo como archivo `.md` descargable para subirlo directo a tu repo en vez de pasarlo a PDF a mano. ¿Te sirve así o lo preferís en formato apunte más corto?