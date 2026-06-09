export default function FormularioContato() {
    function enviar (event){
        event.preventDefault()
        let nome = document.getElementById("nome").value
        let mensagem = document.getElementById("mensagem").value
        alert(`Mensagem enviada por ${nome}: ${mensagem}`)
    }
    return(
        <>
        <form onSubmit={enviar}>
            <input type="text" placeholder="seu nome" id="nome"/>
            <input type="text" placeholder="sua mensagem" id="mensagem"/>
            <button type="submit">enviar</button>
        </form>
        </>
    )
}