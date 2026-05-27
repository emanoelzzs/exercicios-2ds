export default function FormularioMensagem(){
        const nome = document.getElementById("nome").value
        const mensagem = document.getElementById("mensagem").value
        
    function enviar(event){
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
            <input type="submit"/>
        </form>
        </>
    )
}