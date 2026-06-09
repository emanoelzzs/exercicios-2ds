export default function ControleDeAcoes() {
 function atacar() {
    alert("atacando")
 }
 function curar() {
    alert("curando")
 }
 function fugir() {
    alert("fugindo")
 }

 return(
    <>
    <button onClick={atacar}>Atacar</button>
    <button onClick={fugir}>Fugir</button>
    <button onClick={curar}>Curar</button>
    </>
 )
}