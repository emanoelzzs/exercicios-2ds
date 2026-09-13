const Passaporte = require("./Passaporte")

class Factory {
    static criar(tipo, cidadao){
        if(!cidadao){
         throw new Error("Cidadão é obrigatório")
        }
        if(tipo === "comum"){
          return  new Passaporte.Comum(tipo, cidadao)
        }
        if(tipo === "diplomatico"){
          return   new Passaporte.Diplomatico(tipo, cidadao)
        }
        if(tipo === "oficial"){
          return  new Passaporte.Oficial(tipo, cidadao)
        }
        if(tipo === "emergencial"){
          return  new Passaporte.Emergencial(tipo, cidadao)
        }
        throw new Error("Tipo de passaporte inválido")
    }
}

module.exports = Factory