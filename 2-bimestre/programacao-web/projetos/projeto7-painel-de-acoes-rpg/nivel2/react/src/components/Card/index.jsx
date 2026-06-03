import Botao from "../Botao"
import "./style.css"

export default function Card({ children, classe, nivel, vida, experiencia, img }){
     function atacar(){
        alert("Atacando inimigo!")
    }
    function defender(){
        alert("Defendendo posição!")
    }
    function fugir(){
        alert("Fugindo da batalha!")
    }
    return(
        <>
        <div className="card">

        <div className="card-perfil">

            <div className="perfil">
            <img src={img}/>
                <div className="infos">
                    <h1>{children}</h1>
                    <p>Classe: {classe}</p>
                    <p>Nível: {nivel} </p>
                    <p>Vida: {vida}</p>
                    <p>Experiência: {experiencia}</p>
                </div>
            </div>
            <div className="botoes">
                <Botao 
                onClick={atacar}
                classe="atacar"
                texto={"Atacar"}/>
                <Botao 
                onClick={defender}
                classe="defender"
                texto={"Defender"}/>
                <Botao 
                onClick={fugir}
                classe="fugir"
                texto={"Fugir"}/>
                </div>
            </div> 
        
           
        </div>
        </>
    )
}