const express = require("express")
const app = express()
const routes = express.Router()
app.use(express.json())
app.use("/trocas", routes)

module.exports = app