import React from 'react';

const BotonWhatsApp = () => {
  const numeroTelefono = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
  const mensaje = "¡Hola! Estoy interesado en sus servicios.";
  const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={urlWhatsApp}
      className="boton-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </a>
  );
};

export default BotonWhatsApp;
