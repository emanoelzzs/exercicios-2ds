import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";
import icon from "./assets/icon.png"
export default function App(){
    return(
        
        <> 
        <header className="legends">
            <h1>Legends Arena</h1>
        </header>
        <Card 
        img={icon}
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