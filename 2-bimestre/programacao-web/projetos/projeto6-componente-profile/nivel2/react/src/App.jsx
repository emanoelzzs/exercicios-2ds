import Profile from "./components/Profile"
import Tim from "./../public/TIMMM2.jpg"

export default function App() {
    return(
        <>
        < Profile
        nome="Manel"
        idade={18}
        profissao="Atendente da TIM"
        imagem={Tim}
        descricao="Menino loiro"
        />

        </>
    )
}