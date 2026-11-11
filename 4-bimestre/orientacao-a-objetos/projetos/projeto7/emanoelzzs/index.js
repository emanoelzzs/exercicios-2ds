const express = require("express")
const app = express()
const routes = require("./routes/trocas")
app.use(express.json())
app.use("/trocas", routes)

app.use((req, res) => {
    return res.status(404).json({erro: "Rota nao encontrada"})
})

app.use((erro, req, res, next) => {
    const status = erro.status || 500
    return res.status(status).json({erro: erro.message})
})


module.exports = app