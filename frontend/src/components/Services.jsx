import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Beautiful and functional websites.</p>
        </div>
        <div className="service-card">
          <h3>App Development</h3>
          <p>Custom mobile applications.</p>
        </div>
        <div className="service-card">
          <h3>Automation</h3>
          <p>Streamline your business processes.</p>
        </div>
        <div className="service-card">
          <h3>Branding</h3>
          <p>Unique and memorable brand identities.</p>
        </div>
        <div className="service-card">
          <h3>Mockups</h3>
          <p>Visualize your ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
