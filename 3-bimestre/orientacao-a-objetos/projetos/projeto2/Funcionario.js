class Funcionario{
    static quantidade = 0
    #salario

    constructor(nome, cargo, salario){
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario

        Funcionario.quantidade++
    }

    get salario(){
        return this.#salario
    }

    set salario(novoSalario){

        if(novoSalario < 0){
            return "Resultado: alteração recusada."
        }
        else{
            this.#salario = novoSalario    
        }
    }

    static quantidadeFuncionarios(){
        return Funcionario.quantidade
    }

    static get quantidade(){
        return this.quantidade
    }

    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }

}

module.exports = Funcionario