const paragrafo = document.getElementById("mensagem")
const botao = document.getElementById("alterar")

botao.addEventListener("click", ()=> {
    paragrafo.textContent = "Mensagem alterada com JavaScript"
})