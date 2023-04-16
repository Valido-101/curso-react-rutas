import React from 'react';
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

        <h1>Cabecera</h1>
        <hr/>

        <nav>
          <ul>
            <li>
              <NavLink 
                to="/inicio" 
                className={({isActive}) => isActive ? "activado" : ""}>
                  Inicio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/articulo" 
                className={({isActive}) => isActive ? "activado" : ""}>
                  Articulo
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contacto" 
                className={({isActive}) => isActive ? "activado" : ""}>
                  Contacto
              </NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/articulo' element={<Articulos/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>

    </BrowserRouter>
  )
}
