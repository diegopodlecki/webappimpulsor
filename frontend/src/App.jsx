import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Contact />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
}

export default App;
