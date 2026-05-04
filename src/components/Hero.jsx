import React from 'react';
import heroBg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '60vh', /* Reduced from 100vh */
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(rgba(10, 12, 16, 0.7), rgba(10, 12, 16, 0.9)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      padding: '80px 20px 20px', /* Adjusted padding */
    }}>
      <div className="animate-fade-in">
        <h1 style={{ fontSize: '5.5rem', marginBottom: '10px', lineHeight: 1.0 }}>
          Sustainably Powered <br />
          <span style={{ color: '#10b981' }}>Artificial Intelligence</span>
        </h1>
        <p style={{ fontSize: '1.8rem', color: '#94a3b8', maxWidth: '900px', margin: '0 auto 30px' }}>
          Harnessing green energy for the next generation of intelligent nodes.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>Get Started</button>
          <button style={{ 
            padding: '16px 32px', 
            background: 'transparent', 
            border: '2px solid rgba(255,255,255,0.2)', 
            borderRadius: '8px', 
            color: 'white', 
            fontWeight: 700,
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
