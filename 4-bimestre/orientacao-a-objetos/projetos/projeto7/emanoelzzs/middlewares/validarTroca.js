function validarTroca(req, res, next){
    if(!req.body.cliente){
        return res.status(400).json({erro: "O campo cliente e obrigatorio"})
    }
    if(!req.body.exemplar){
        return res.status(400).json({erro: "O campo exemplar e obrigatorio"})
    }
    if(Number.isNaN(Number(req.body.credito))){
        return res.status(400).json({erro: "O campo credito deve ser um numero"})
    }
    if(Number(req.body.credito) <= 0){
        return res.status(400).json({erro: "O campo credito deve ser maior que zero"})
    }
    next()
}

module.exports = validarTroca