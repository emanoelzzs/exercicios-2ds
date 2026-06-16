import "./style.css"

export default function PainelStatus({ total }) {
    return(
        <>
            <p id="totalPersonagens">Total de Personagens: {total}</p>
        </>
    )
}