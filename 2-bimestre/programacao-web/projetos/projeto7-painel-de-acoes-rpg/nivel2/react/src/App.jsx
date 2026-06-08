import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";
<<<<<<< HEAD
import icon from "./assets/icon.png"
=======
import img from "./assets/icon.png"
import "./App.css"
>>>>>>> e740abb5b08f0b13dfd868f86f3ea8c2bc0e46cd
export default function App(){
    return(
        
        <>
        <header className="legends">
            <h1>Legends Arena</h1>
        </header>
        <Card 
<<<<<<< HEAD
        img={icon}
=======
        img={img}
>>>>>>> e740abb5b08f0b13dfd868f86f3ea8c2bc0e46cd
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