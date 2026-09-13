class Passaporte {
    constructor(tipo, cidadao){
        this.tipo = tipo
        this.cidadao = cidadao
    }

    emitir(){
      return  "Passaporte emitido"
    }
}

class Comum extends Passaporte {
    emitir(){
       return `Passaporte comum emitido para: ${this.cidadao}`
    }
    }

class Diplomatico extends Passaporte {
    emitir(){
       return `Passaporte diplomático emitido para: ${this.cidadao}`
    }
    }

class Oficial extends Passaporte {
    emitir(){
       return `Passaporte oficial emitido para: ${this.cidadao}`
    }
    }

class Emergencial extends Passaporte {
    emitir(){
       return `Passaporte emergencial emitido para: ${this.cidadao}`
    }
    }


module.exports = Passaporte
module.exports.Comum = Comum
module.exports.Diplomatico = Diplomatico
module.exports.Oficial = Oficial
module.exports.Emergencial = Emergencial    