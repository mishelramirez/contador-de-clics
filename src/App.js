import "./App.css";
import Boton from "./componente/Boton";
import mishelLogo from "./imagenes/mishel.jfif";
import Contador from "./componente/Contador";
import{useState} from"react";

function App() {

  const [numClics, setNumClics ] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    console.log("clic");

  }

  const reiniciarContador = () => {
      setNumClics(0);

    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="imagen-logo" src={mishelLogo} alt="logo de contador" />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
         texto="clic"
        esBotonClic={true} manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
