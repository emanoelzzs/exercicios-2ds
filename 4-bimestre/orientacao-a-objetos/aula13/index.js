const { writeFile } = require("fs")
const fs = require("fs/promises")

ARQUIVO = process.env.ARQUIVO_CONTATOS || "contatos.json"

async function gravar(contatos) {
     await fs.writeFile(ARQUIVO, JSON.stringify(contatos, null, 2))
}

module.exports = { gravar }