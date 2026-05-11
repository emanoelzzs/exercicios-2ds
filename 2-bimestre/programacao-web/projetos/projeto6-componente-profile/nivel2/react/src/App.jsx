import Profile from "./components/Profile"
import Tim from "./../public/TIMMM2.jpg"

export default function App() {
    return(
        <>
        <div className="profile-card">
        < Profile
        nome="João Berck"
        idade={18}
        profissao="Atendente da TIM"
        imagem={Tim}
        descricao="Menino loiro"
        />

        < Profile
        nome="Ana Maria"
        idade={35}
        profissao="Professora de geografia"
        imagem={Tim}
        descricao="mulher esbelta"
        />

        < Profile
        nome="Valdonis"
        idade={40}
        profissao="Policial"
        imagem={Tim}
        descricao="Homem forte"
       /> 
       </div>

        </>
    )
}