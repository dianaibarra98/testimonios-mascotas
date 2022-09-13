import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src ={require(`../imagenes/${props.imagen}`)}
        alt='foto de perro mestizo'/>
        <div className='contenedor-texto-testimonio'>
          <p className='raza-perro'><strong>{props.raza}</strong></p>
          <p className='razon-adopcion'><b>{props.razon}</b></p>
          <p className='texto-testimonio'> {props.testimonio} </p>
        </div>
    </div>
  );
}
export default Testimonio;