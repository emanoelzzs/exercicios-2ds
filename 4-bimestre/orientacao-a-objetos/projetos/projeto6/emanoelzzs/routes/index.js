const express = require("express")
const router = express.Router()
const clientesRouter = require("./clientes")
const produtosRouter = require("./produtos")
const promocoesRouter = require("./promocoes")

router.get("/", (req, res) => {
    res.status(200).json({ "mensagem": "API de Mercadinho" })
})
router.use("/clientes", clientesRouter)
router.use("/produtos", produtosRouter)
router.use("/promocoes", promocoesRouter)


module.exports = router