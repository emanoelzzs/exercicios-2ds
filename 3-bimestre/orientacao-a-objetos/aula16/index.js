class Veiculo {
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    apresentar(){
      return  `${this.marca} ${this.modelo}`
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, portas){
        super(marca, modelo)
        this.portas = portas
    }

    apresentar(){
        return `${super.apresentar()}`
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, cilindrada){
        super(marca, modelo)
        this.cilindrada = cilindrada
    }

     apresentar(){
        return `${super.apresentar()}`
    }
}

module.exports = {Veiculo, Carro, Moto}