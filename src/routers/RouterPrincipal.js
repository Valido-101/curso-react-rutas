import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Inicio } from '../components/Inicio';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>

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
