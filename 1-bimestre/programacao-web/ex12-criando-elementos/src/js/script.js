const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar")


botao.addEventListener("click", ()=> {
  const linha = document.createElement("li")
  linha.textContent = "Novo Item"
  lista.appendChild(linha)
     })

