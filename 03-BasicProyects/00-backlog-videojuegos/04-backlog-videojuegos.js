// ----------- Proyecto Integrador 1 — Backlog de Videojuegos -----------

const backlogGames = [
    { id: 1, titulo: "Hollow Knight", plataforma: "PC", genero: "Metroidvania", horas: 40, completado: true, puntaje: 6 },
    { id: 2, titulo: "Elden Ring", plataforma: "PS5", genero: "Souls", horas: 25, completado: false, puntaje: 0 },
    { id: 3, titulo: "Moral Kombat", plataforma: "PS5", genero: "Fight", horas: 12, completado: true, puntaje: 4 },
    { id: 4, titulo: "GTA 5", plataforma: "PS5", genero: "Rol", horas: 120, completado: false, puntaje: 8},
    { id: 5, titulo: "FIFA 26", plataforma: "XBOX S", genero: "Deporte", horas: 60, completado: false, puntaje: 9 },
    { id: 6, titulo: "FIFA 24", plataforma: "XBOX S", genero: "Deporte", horas: 60, completado: false, puntaje: 10},
]

// --- Funcion 1 ---
function agregarJuego(lista, juego) {
    let newBacklogGames = [...lista, juego] // Creo un nuevo array 
    return newBacklogGames
}

console.log(agregarJuego(backlogGames, { id: 6, titulo: "New order", plataforma: "XBOX X", genero: "Deporte", horas: 10, completado: false, puntaje: 9 }))
console.log(backlogGames.length)


// --- Funcion 2 ---
function marcarCompletado (lista, id){
    const newArray1 = [...lista]
    for (let i = 0; i < newArray1.length; i++){
        if (newArray1[i].id === id) {
            newArray1[i] = {...newArray1[i], completado: true}
        }
    }
    return newArray1
}

console.log(marcarCompletado(backlogGames, 4))
console.log(backlogGames[4].completado)

// --- Funcion 3 ---
function filtrarPorPlataforma(lista, plataforma){
    const newArray2 = []
    for (let i = 0; i < lista.length; i++){
        if(lista[i].plataforma === plataforma){
            newArray2.push(lista[i])
        }
    }
    return newArray2
}

console.log(filtrarPorPlataforma(backlogGames, "PS5"))

// --- Funcion 4 ---
function filtrarCompletados(lista, completado){
    const newArray3 = []
    for (let i = 0; i < lista.length; i++){
        if(lista[i].completado == completado){
            newArray3.push(lista[i])
        } 
    }
    return newArray3
}

console.log(filtrarCompletados(backlogGames, false))

// --- Funcion 5 ---
function buscarPorTitulo(lista, texto){
    const newArray4 = []
    let textoLower = texto.toLowerCase()
    for(let i = 0; i < lista.length; i++){
        if(lista[i].titulo.toLowerCase().includes(textoLower)) {
            newArray4.push(lista[i])
        }
    }
    return newArray4
}

console.log(buscarPorTitulo(backlogGames, "fi"))

// --- Funcion 6 ---
function ordenarPorPuntaje(lista){
    const newArray5 = [...lista].sort((a, b) => b.puntaje - a.puntaje)
    return newArray5
    
}

console.log(ordenarPorPuntaje(backlogGames))

// --- Funcion 7 ---
function top3(lista){
    
    const arrayOrderTop = ordenarPorPuntaje(lista)
    const arrayTop3 = []  
    for(let i = 0; i < 3; i++){
        arrayTop3.push(arrayOrderTop[i])
    }
    return arrayTop3
}

console.log("############### TOP 3 ################")
console.log(top3(backlogGames))

// --- Funcion 7 ---

function horasTotales(lista){
    let horasTotales = 0
    for(let i = 0; i < lista.length; i++){
        horasTotales += lista[i].horas
    }
    return horasTotales
}

console.log(horasTotales(backlogGames))
