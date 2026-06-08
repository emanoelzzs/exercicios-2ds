import "./style.css"
export default function Botao({onClick, classe, texto}) {
    return(
        <>
        <div className="bnts">
        <button onClick={onClick} className={classe}>{texto}</button>
        </div>
        </>
    )
}