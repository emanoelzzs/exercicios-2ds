import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";
import img from "./assets/vite.svg"
export default function App(){
    return(
        <>
        <header>
            <h1>Legends Arena</h1>
        </header>
        <Card 
        img={img}
        classe="Tank"
        nivel="25"
        vida="850/1000"
        experiencia="1250/2000"
        >
            Guerreiro
        </Card>
        
        <FormularioMensagem/>
        </>
    )
}