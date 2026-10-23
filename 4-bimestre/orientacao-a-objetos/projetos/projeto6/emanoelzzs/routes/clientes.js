const express = require("express")
const router = express.Router()

const clientes = [
    { id: 1, nome: "Ana", tipo: "cadastrado" },
    { id: 2, nome: "Bruno", tipo: "avulso" }
]

router.get("/", (req, res) => {
    res.json(clientes)
})

router.get("/total", (req, res) => {
    res.json({"total": clientes.length})
})

module.exports = router