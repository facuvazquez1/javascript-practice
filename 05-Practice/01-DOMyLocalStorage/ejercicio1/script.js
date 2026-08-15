const titulo = document.getElementById("titulo");
const descripcion = document.querySelector(".descripcion");
const boton = document.getElementById("boton-cambiar");


// addEventListener("evento", función) — le dice a un elemento que ejecute esa función cada vez que ocurra ese evento. Ej de eventos: click, submit, keydown, input, etc...

boton.addEventListener("click", () => {
  titulo.textContent = "Nuevo texto";
  descripcion.style.backgroundColor = "Yellow"
});