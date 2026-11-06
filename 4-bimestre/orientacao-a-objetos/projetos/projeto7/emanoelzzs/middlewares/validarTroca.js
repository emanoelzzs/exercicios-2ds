function validarTroca(req, res, next){
    if(!req.body.cliente){
        return res.status(400).json({erro: "O campo cliente e obrigatorio"})
    }
    if(!req.body.exemplar){
        return res.status(400).json({erro: "O campo exemplar e obrigatorio"})
    }
    if(Number.isNaN(Number(req.body.credito))){

    }
    if(req.body.credito <= 0){
        
    }
    next()
}

module.exports = validarTroca