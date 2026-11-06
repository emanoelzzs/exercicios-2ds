const express = require("express")
const routes = express.Router()
const validarTroca = require("../middlewares/validarTroca")
const trocas = [
    { id: 1, cliente: "Ana", exemplar: "1984", credito: 15, situacao: "concluida" },
    { id: 2, cliente: "Bruno", exemplar: "O Hobbit", credito: 12, situacao: "aprovada" },
    { id: 3, cliente: "Carla", exemplar: "Sapiens", credito: 8, situacao: "aprovada" }
]

routes.get("/", (req, res) => {
    const {situacao, creditoMin} = req.query
    let resultado = trocas

    if(situacao){
        resultado = resultado.filter(p => p.situacao === situacao)
    }
    if(creditoMin !== undefined){
        resultado = resultado.filter(p => p.credito >= Number(creditoMin))
    }
    return res.status(200).json(resultado)
})

routes.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const troca = trocas.find(p => p.id === id)

    if(!troca){
      const erro = new Error("Troca nao encontrado")
      erro.status = 404
      return next(erro)
    }
    res.status(200).json(troca)
})

routes.get("/resumo", (req, res) => {
    const total = trocas.length
    const creditoTotal = trocas.reduce((soma, troca) => soma + troca.credito, 0)

    return res.status(200).json({
        total,
        creditoTotal
    })
})

routes.post("/", validarTroca, (req, res) => {
    const id = trocas.map(i => i.id)
    const maiorID = Math.max(...id)
    let novoID = maiorID + 1
    const novaTroca = {
        id: novoID,
        cliente: req.body.cliente,
        exemplar: req.body.exemplar,
        credito: Number(req.body.credito),
        situacao: "avaliando"
    }
    trocas.push(novaTroca)
    return res.status(201).json({mensagem: "Registro de troca criado"})
})

module.exports = routes