import React from "react";
import "../hojas.estilo/Boton.css";


function Boton({ texto, esBotonClic, manejarClic }){
    return(
        <button 
        className={ esBotonClic? "boton-clic " : "boton-reiniciar" }
        onClick={manejarClic}>
          {/* se usa como metodo de destructuracion sin necesitar los props  {props.texto}*/ }
          {texto}
        </button>
    );
}

export default Boton;