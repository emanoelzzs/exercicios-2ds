import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";

export default function App(){
    return(
        <>
        <header>
            <h1>Legends Arena</h1>
        </header>
        <Card 
        img=""
        classe="Tank"
        nivel="25"
        vida="850/1000"
        experiencia="1250/2000"
        >
            <h1>Guerreiro</h1>
        </Card>
        
        <FormularioMensagem/>
        </>
    )
}