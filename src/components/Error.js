import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>ERROR 404</h1>
        <p>La página no existe</p>
        <Link to="/inicio">Vuelve al inicio</Link>
    </div>
  )
}
