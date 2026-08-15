class Cuenta {

    #saldo

    constructor(titular, numero, saldo){
        this.titular = titular
        this.numero = numero
        this.#saldo = saldo
    }

    depositar(monto){
        this.#saldo += monto
        return this.#saldo
    }
}

const cuenta1 = new Cuenta("Facu Vazquez", "909091", 100)
console.log(cuenta1.depositar(10))
