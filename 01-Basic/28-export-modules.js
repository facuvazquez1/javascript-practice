// --------- Exportacion de modulos --------- 

// --------- IMPORTANTE ---------
// Para poder importar o importar modulos, cada fichero deberia llevar en vez de .js un .mjs que indicaria que es un fichero de modulo.
// Pero la opcion que mas se utiliza al estar corriendo Javascript con Node.js es crear o definir en el "package.json" el type: module
// {
//     "type": "module"
// }


// --------- Funciones --------
export function add(a, b){
    return a + b;
}

console.log(add(5, 10))

// --------- Propiedas ---------

export const PI = 3.141592
export let name = "facundo vazquez"


// --------- Exportacion por defecto ---------
export default function substract(a, b) {
    return a - b
}

// --------- Clases ---------

export class Circle {
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimeter(){
        return 2 * Math.PI * this.radius
    }
}

// // Modulos externos

// const os = requiere("os")
// console.log(os.platform())