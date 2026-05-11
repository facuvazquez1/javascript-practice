/*
1) -----  Gestor de tareas por consola (nivel inicial) ----- 
- Objetivo
Crear una app en consola para administrar tareas simples.

Temas que practicás: Variables y tipos de datos / Condicionales y ternarios / Arrays y objetos, Bucles / Funciones / Métodos de string / console (log, table, warn) / Especificaciones

Cada tarea debe tener: id, titulo, completada (true/false), prioridad ("alta" | "media" | "baja").
Funciones mínimas:
agregarTarea(titulo, prioridad)
listarTareas()
marcarComoCompletada(id)
eliminarTarea(id)
filtrarPorEstado(completada)
Mostrar listado con console.table.
Validar datos básicos (por ejemplo, título no vacío).
Pista para iniciar

Empezá con un array vacío const tareas = [].
Definí primero la estructura de una tarea (objeto).
Construí las funciones una por una y probalas con llamadas manuales al final del archivo.
*/

const listaTareas = [

    { id: 0, titulo: "Pagar facturas", completada: false, prioridad: "alta"},
    { id: 1, titulo: "Sacar al perro", completada: false, prioridad: "media"},
    { id: 2, titulo: "Hacer un postre", completada: false, prioridad: "baja"}
    
]

// ---------------- funcion: listarTareas() ----------------
function listar(lista){
    if(lista.length === 0) { // Manejo de lista de tareas "vacias"
        console.log("No hay tareas disponibles.")
    } else {
        console.table(lista) 
    }
}

listar(listaTareas) 
/* Resultado: 
┌─────────┬────┬───────────────────┬────────────┬───────────┐
│ (index) │ id │ titulo            │ completada │ prioridad │
├─────────┼────┼───────────────────┼────────────┼───────────┤
│ 0       │ 0  │ 'Pagar facturas'  │ false      │ 'alta'    │
│ 1       │ 1  │ 'Sacar al perro'  │ false      │ 'media'   │
│ 2       │ 2  │ 'Hacer un postre' │ false      │ 'baja'    │
└─────────┴────┴───────────────────┴────────────┴───────────┘
*/


// ---------------- funcion: agregarTarea ----------------
// Decision: no pedimos a la funcion ID, tampoco si esta completada o no, son valores que nosotros definimos por default. 

function agregarTarea(titulo, prioridad){
    let newId = max

    listaTareas.push(
        {
            id: newId,
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
        }
    )   
}

agregarTarea("cocina a la noche", "baja")
listar(listaTareas)









