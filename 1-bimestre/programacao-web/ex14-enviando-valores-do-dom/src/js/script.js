const input = document.getElementById("nome")
const botao = document.getElementById("mostrar")
const p = document.getElementById("resultado")


botao.addEventListener("click", ()=> {
    let valor = input.value
    p.textContent = `Olá, ${valor}`
})