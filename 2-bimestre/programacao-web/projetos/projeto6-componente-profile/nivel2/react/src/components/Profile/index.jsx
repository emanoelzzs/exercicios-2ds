import "../../styles/ProfileCSS.css"
import Nome from "./elements/Nome"
import Img from "./elements/Img"
import Informacoes from "./elements/Informacoes"


function Profile({idade, nome, profissao, imagem}) {
    return(
    <>
    <div className="card">
        <Img imagem={imagem}/>
        <Nome nome={nome}/>
        <Informacoes idade={idade} profissao={profissao}/>
    </div>
    </>
    )
}
export default Profile