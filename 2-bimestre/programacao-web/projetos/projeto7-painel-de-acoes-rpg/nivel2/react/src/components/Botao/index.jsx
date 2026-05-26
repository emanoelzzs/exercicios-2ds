export default function Botao({...rest}) {
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
        <button onClick={atacar} {...rest}>Atacar</button>
        <button onClick={defender} {...rest}>Defender</button>
        <button onClick={fugir} {...rest}>Fugir</button>
        </>
    )
}