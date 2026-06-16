import { useState, useRef } from "react";
import "./style.css"
export default function FormularioPersonagem({ adicionarPersonagem }) {
    const [ nome, setNome ] = useState("")
    const [ classe, setClasse ] = useState("")
    const inputNome = useRef(null)
    const inputClasse = useRef(null)
    
    function enviar(e){
        e.preventDefault()
        const novoPersonagem = {
            nome: nome,
            classe: classe
        }
        adicionarPersonagem(personagensAnteriores => [...personagensAnteriores, novoPersonagem])
        inputNome.current.value = ""
        inputClasse.current.value = ""
        inputNome.current.focus()
        console.log("Lista atualizada")
    }
    return(
        <div className="cadastro">
            <form onSubmit={enviar}>
                <label>Nome</label> <br />
                <input type="text" ref={inputNome} onChange={e => setNome(e.target.value)} placeholder="nome do personagem"/> <br />
                <label>Classe</label> <br />
                <input type="text" ref={inputClasse} onChange={e => setClasse(e.target.value)} placeholder="classe do personagem"/> <br />
                <button type="submit">Cadastrar Personagem</button>
            </form>
        </div>
    )

}