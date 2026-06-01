import Botao from "../Botao"
import "./style.css"

export default function Card({ children, classe, nivel, vida, experiencia, img }){
    return(
        <>
        <div className="card-perfil">
            <img src={img}/>
            <div className="infos">
            <h1>{children}</h1>
            <p>Classe: {classe}</p>
            <p>Nível: {nivel} </p>
            <p>Vida: {vida}</p>
            <p>Experiência: {experiencia}</p>
            <div className="botoes">
             <Botao className="bnt"/>
             </div>
            </div>
           
        </div>
        </>
    )
}