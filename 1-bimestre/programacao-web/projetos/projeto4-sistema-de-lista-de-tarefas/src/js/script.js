const conteudo  = document.getElementById("tarefa")
const lista = document.getElementById("lista")
const form = document.getElementById("formulario")
let contagem = 0

form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    if (conteudo.value != ""){

        const li = document.createElement("li")
        li.id = `tarefa${contagem}`
        li.classList.add(`tarefa${contagem}`)
        
        li.innerHTML = `
            ${conteudo.value}.<br>
            <button onclick="remover(${contagem})">
                remover
            </button>
            <button onclick="concluido(${contagem})">
                concluido
            </button>
        ` 

        lista.appendChild(li)
        conteudo.value = ""
        
    }else{
        alert("preencha todos os campos de informações")
        return
    }

    contagem++
})

function remover(i){
    const tarefaExcluir = document.getElementById(`tarefa${i}`)
    lista.removeChild(tarefaExcluir)
}

function concluido(i){
    const tarefaConcluido = document.getElementById(`tarefa${i}`) 

    tarefaConcluido.style.textDecoration = "line-through"
    tarefaConcluido.style.textDecorationColor = "green"
    tarefaConcluido.style.color = "green"
}