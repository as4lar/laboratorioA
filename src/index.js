import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from 'react';
import Servicios from './components/Servicios';
const root = ReactDOM.createRoot(document.getElementById('root'));
const IniciarS=()=>{
  const [sesion, cambiarSesion]=useState(false)
  return(
    <>
    {sesion==false ?(
      <>
      <div className='App'>
        <header className='App-header'>
        <h1 className={"text-white"}>Bienvenido a Laboratorios Clínicos</h1>
        <div className='align-content-center'>
          <button className={"btn btn-info btn-lg text-white "} onClick={()=>cambiarSesion(true)}>Comenzar</button>
        </div>
        </header>
      </div>
      </>
    ):(
      <>
      <div className='App'>
        <header className='App-header'>
          <h1 className={"text-white"}>Servicios Disponibles</h1>
          <div className='container'>
          <Servicios/>
          </div>
        </header>
      </div>
      </>
    )}
    </>
  )
}
root.render(
   <IniciarS/>
);
