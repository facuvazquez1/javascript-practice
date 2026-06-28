// Manejo del DOM (Document Object Model)

// - Seleccion de elementos

// Metodos Basicos (Selector HTML)
const myElementId = document.getElementById("id") // Selecciona un elemento unico, el que tenga el "ID" que debe ser unico.
const myElementsClass = document.getElementsByClassName("class") // Selecciona las clases necesarias, son diferentes elementos.
const myElementsTag = document.getElementsByTagName("tag") // Seleccionamos por etiqueta

// Metodos mas modernos (selector CSS)
document.querySelector(".paragraph") // me devuelve un elemento, el primero que encuentre que cumpla con los parentesis
document.querySelectorAll(".paragraph") // me devuelve una lista de nodos

// Manipulacion de elementos 
const title = document.getElementById("title")
title.textContent = "Hola Javascript" // si existe el titulo title, se remplaza el texto desde Javascript.

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo parrafo</p>"

// - Modificacion de atributos
const link = document.querySelector("a")
const url  = link.getAttribute("href")

// Establecimiento del Atributo
link.setAttribute("href", "https://www.google.com.ar")

//Comprobacion del atributo
const hasTarget = link.hasAttribute("target")

// Eliminacion de atributos
link.removeAttribute("target")

// - Interaccion con clases
const box = document.querySelector(".box")
box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")

const button = document.querySelector("button")
button.style.backgroundColor = "blue"
button.style.color = "white"
button.style.padding = "10px"

// Creacion y eliminacion de elementos 

// Creacion 

document.createElement
