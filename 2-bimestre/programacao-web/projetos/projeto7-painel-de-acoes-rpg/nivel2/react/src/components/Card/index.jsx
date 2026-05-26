import Botao from "../Botao"

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
            </div>
            <Botao className="bnt"/>
        </div>
        </>
    )
}