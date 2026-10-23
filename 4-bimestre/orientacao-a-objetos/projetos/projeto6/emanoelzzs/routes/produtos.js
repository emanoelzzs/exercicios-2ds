const express = require("express")
const router = express.Router()

const catalogo = [
    { id: 1, nome: "Arroz", secao: "mercearia", preco: 28, emEstoque: true },
    { id: 2, nome: "Leite", secao: "frios", preco: 6, emEstoque: true },
    { id: 3, nome: "Cafe", secao: "mercearia", preco: 18, emEstoque: false }
]

router.get("/", (req, res) => {
    res.json(catalogo)
})

router.get("/em-estoque", (req, res) => {
    res.json(catalogo.filter(catalogo => catalogo.emEstoque))
})

router.get("/total", (req, res) => {
    res.json({ "total": catalogo.length })
})

router.post("/", (req, res) => {
    res.status(201).json({ "mensagem": "Cadastro de produto realizado" })
})
 
module.exports = router 