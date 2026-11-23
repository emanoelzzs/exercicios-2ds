
const fs = require("fs/promises")

const arquivo = process.env.ARQUIVO_PEDIDOS || "pedidos.json"

async function listar() {
    try {
        const dados = await fs.readFile(arquivo, "utf-8")
        return JSON.parse(dados)
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }
        throw erro
    }
}

async function salvar(pedido) {
    const pedidos = await listar()

    pedidos.push(pedido)

    await fs.writeFile(
        arquivo,
        JSON.stringify(pedidos, null, 2)
    )

    return pedido
}

async function atualizar(id, dados) {
    const pedidos = await listar()

    const indice = pedidos.findIndex(pedido => pedido.id === id)

    if (indice === -1) {
        return null
    }

    pedidos[indice] = {
        ...pedidos[indice],
        ...dados,
        id: pedidos[indice].id
    }

    await fs.writeFile(
        arquivo,
        JSON.stringify(pedidos, null, 2)
    )

    return pedidos[indice]
}

async function remover(id) {
    const pedidos = await listar()

    const indice = pedidos.findIndex(pedido => pedido.id === id)

    if (indice === -1) {
        return false
    }

    pedidos.splice(indice, 1)

    await fs.writeFile(
        arquivo,
        JSON.stringify(pedidos, null, 2)
    )

    return true
}

async function contar() {
    const pedidos = await listar()
    return pedidos.length
}

module.exports = {
    listar,
    salvar,
    atualizar,
    remover,
    contar
}
