import Profile from "./components/Profile"
import Titulo from "./components/Titulo"
import mariana from "./assets/mariana.jpg"
import valdonis from "./assets/valdonis.webp"
import anamaria from "./assets/anamaria.webp"
export default function App() {
    return(
        <>
        < Titulo/>
        
        <div className="profile-card">
        < Profile
        nome="Mariana"
        idade={18}
        profissao="Influencer"
        imagem={mariana}
        />

        < Profile
        nome="Ana Maria"
        idade={35}
        profissao="Professora de geografia"
        imagem={anamaria}
        />

        < Profile
        nome="Valdonis"
        idade={40}
        profissao="Policial"
        imagem={valdonis}
       /> 
       </div>

        </>
    )
}