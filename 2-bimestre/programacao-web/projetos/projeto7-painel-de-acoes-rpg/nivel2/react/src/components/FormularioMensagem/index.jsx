import "./style.css"
export default function FormularioMensagem(){
        
        
    function enviar(event){
        event.preventDefault()
        const nome = document.getElementById("nome").value
        const mensagem = document.getElementById("mensagem").value
        alert(`${nome} sua mensagem:"${mensagem}" foi enviada`)
    }
    return(
        <div className="bloco">
        <div className="formulario">
        <header>
        <h1>Formulário de Mensagem</h1>
        </header>
                <form onSubmit={enviar}>

                    <div className="input">
                        <label>NOME:</label>
                        <input type="text" placeholder="Digite seu nome" id="nome"/>
                    </div>

                    <div className="input">
                        <label>MENSAGEM:</label>
                        <input type="text" placeholder="Digite sua mensagem..." id="mensagem"/>
                    </div>

                    <button type="submit" className="enviar">enviar mensagem</button>
                </form>
        </div>
        </div>
    )
}