export default function Botao() {
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
        <button onClick={atacar} className="atacar">Atacar</button>
        <button onClick={defender} className="defender">Defender</button>
        <button onClick={fugir} className="fugir">Fugir</button>
        </>
    )
}