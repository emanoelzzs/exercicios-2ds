<<<<<<< HEAD
export default function FormularioMensagem(){ 
=======
export default function FormularioMensagem(){
        const nome = document.getElementById("nome").value
        const mensagem = document.getElementById("mensagem").value
        
>>>>>>> 33b3df2ef67cc8a5397b31bf74f7519f91d674e4
    function enviar(event){
        const nome = document.getElementById("nome").value
        const mensagem = document.getElementById("mensagem").value
        event.preventDefault()
        alert(`${nome} sua mensagem:"${mensagem}" foi enviada`)
    }
    return(
        <>
        <header>
        <h1>Formulário de Mensagem</h1>
        </header>
        <form onSubmit={enviar}>
            <input type="text" placeholder="Digite seu nome" id="nome"/>
            <input type="text" placeholder="Digite sua mensagem..." id="mensagem"/>
            <button type="submit">Envia mensagem</button>
        </form>
        </>
    )
}