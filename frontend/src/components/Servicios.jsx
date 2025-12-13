import React from 'react';

const Servicios = () => {
  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="tarjetas-servicio">
        <div className="tarjeta-servicio">
          <h3>Diseño Web</h3>
          <p>Sitios web atractivos y funcionales.</p>
        </div>
        <div className="tarjeta-servicio">
          <h3>Desarrollo de Apps</h3>
          <p>Aplicaciones móviles a medida.</p>
        </div>
        <div className="tarjeta-servicio">
          <h3>Automatización</h3>
          <p>Optimiza los procesos de tu negocio.</p>
        </div>
        <div className="tarjeta-servicio">
          <h3>Branding</h3>
          <p>Identidades de marca únicas y memorables.</p>
        </div>
        <div className="tarjeta-servicio">
          <h3>Mockups</h3>
          <p>Visualiza tus ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
