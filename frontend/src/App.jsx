import React from 'react';
import Heroe from './components/Heroe';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import AsistenteVirtual from './components/AsistenteVirtual';
import BotonWhatsApp from './components/BotonWhatsApp';
import './App.css';

function Aplicacion() {
  return (
    <div className="App">
      <Heroe />
      <Servicios />
      <Contacto />
      <AsistenteVirtual />
      <BotonWhatsApp />
    </div>
  );
}

export default Aplicacion;
