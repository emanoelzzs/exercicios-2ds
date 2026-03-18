const titulo = document.getElementById("titulo")
const botao = document.getElementById("botao")
 
botao.addEventListener("click", ()=>{
    titulo.textContent = "Texto Alterado com JavaScript"
})