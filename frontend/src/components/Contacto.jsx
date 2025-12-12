import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/prospectos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      if (respuesta.ok) {
        alert('¡Mensaje enviado con éxito!');
        setNombre('');
        setEmail('');
        setMensaje('');
      } else {
        alert('Error al enviar el mensaje.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error.');
    }
  };

  return (
    <section className="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
