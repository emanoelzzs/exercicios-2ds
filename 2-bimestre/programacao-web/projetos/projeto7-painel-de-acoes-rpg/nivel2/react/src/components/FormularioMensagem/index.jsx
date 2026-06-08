<<<<<<< HEAD
<<<<<<< HEAD
export default function FormularioMensagem(){ 
=======
=======
import "./style.css"
>>>>>>> e740abb5b08f0b13dfd868f86f3ea8c2bc0e46cd
export default function FormularioMensagem(){
        
        
>>>>>>> 33b3df2ef67cc8a5397b31bf74f7519f91d674e4
    function enviar(event){
        const nome = document.getElementById("nome").value
        const mensagem = document.getElementById("mensagem").value
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
<<<<<<< HEAD
        <form onSubmit={enviar}>
            <input type="text" placeholder="Digite seu nome" id="nome"/>
            <input type="text" placeholder="Digite sua mensagem..." id="mensagem"/>
            <button type="submit">Envia mensagem</button>
        </form>
        </>
=======
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
>>>>>>> e740abb5b08f0b13dfd868f86f3ea8c2bc0e46cd
    )
}