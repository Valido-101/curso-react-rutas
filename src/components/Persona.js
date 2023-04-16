import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    //Recoge todos los parámetros que le llegan por la url
    //const parametros = useParams();

    //Recoge el nombre usando desestructuración de datos
    //Se le puede asignar un valor por defecto directamente en la desestructuración
    const {nombre = "Ere tonto"} = useParams();
    
  return (
    <div>
        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Página de Persona: {nombre}</h1>}
        <p>Esta es la página de persona</p>
    </div>
  )
}
