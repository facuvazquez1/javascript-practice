// Arrow functions avanzadas 

// Retorno implicito
const multiplicacion = (a, b) => a * b
console.log(multiplicacion(5, 5))

// - this lexico 

const person = {

    name: "Facundo",

    saludo: function(){
        console.log(`Hola, ${this.name}`) // el .this apunta al contexto del objeto persona name
    },

    arrowSaludo: () => {
        console.log(`Hola, ${this.name}`) // el .this genera su propopio contexto
    },

}

person.saludo() // Resultado: Hola, Facundo
person.arrowSaludo() // Resultado: Hola, undefined (el this.name de las arrow genera su propio contexto)





