import React, { useState } from 'react';

const AsistenteVirtual = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [valorInput, setValorInput] = useState('');

  const alternarChat = () => {
    setEstaAbierto(!estaAbierto);
  };

  const manejarCambioInput = (e) => {
    setValorInput(e.target.value);
  };

  const manejarEnviarMensaje = () => {
    if (valorInput.trim()) {
      setMensajes([...mensajes, { texto: valorInput, emisor: 'usuario' }]);
      setValorInput('');
      // Respuesta automática básica para demostración
      setTimeout(() => {
        setMensajes((mensajesAnteriores) => [
          ...mensajesAnteriores,
          { texto: '¡Gracias por tu mensaje!', emisor: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className={`contenedor-chatbot ${estaAbierto ? 'abierto' : ''}`}>
      <button className="boton-chatbot" onClick={alternarChat}>
        {estaAbierto ? 'Cerrar' : 'Chat'}
      </button>
      {estaAbierto && (
        <div className="ventana-chatbot">
          <div className="mensajes-chatbot">
            {mensajes.map((msg, index) => (
              <div key={index} className={`mensaje ${msg.emisor}`}>
                {msg.texto}
              </div>
            ))}
          </div>
          <div className="entrada-chatbot">
            <input
              type="text"
              value={valorInput}
              onChange={manejarCambioInput}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={manejarEnviarMensaje}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsistenteVirtual;
