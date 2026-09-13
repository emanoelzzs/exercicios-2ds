class Cofre{
    #codigo
    constructor(codigo){
        this.#codigo = codigo
    }

    verificarCodigo(codigo){
        if(this.#codigo == codigo){
            return true
        }else{
            return false
        }
    }
}

const cofre = new Cofre("1234")

module.exports = cofre