import Profile from "./components/Profile"
import Titulo from "./components/Titulo"

export default function App() {
    return(
        <>
        < Titulo/>
        
        <div className="profile-card">
        < Profile
        nome="Mariana"
        idade={18}
        profissao="Influencer"
        imagem="https://diariodecuiaba.nyc3.digitaloceanspaces.com/storage/webdisco/2025/10/08/800x600/f54ca1ccb0d5acf19f3a6d3c5763e5cd-diariodecuiaba-com-br.jpg"
        descricao="influenciadora"
        />

        < Profile
        nome="Ana Maria"
        idade={35}
        profissao="Professora de geografia"
        imagem="https://thumbs.dreamstime.com/b/mujer-rubia-natural-22149492.jpg"
        descricao="mulher esbelta"
        />

        < Profile
        nome="Valdonis"
        idade={40}
        profissao="Policial"
        imagem="https://estiloeatitude.com.br/wp-content/uploads/2024/07/como-ser-um-homem-elegante-capa.webp"
        descricao="Homem forte"
       /> 
       </div>

        </>
    )
}