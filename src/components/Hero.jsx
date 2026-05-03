import React from 'react';
import heroBg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `linear-gradient(rgba(10, 12, 16, 0.7), rgba(10, 12, 16, 0.9)), url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center',
      padding: '0 20px',
    }}>
      <div className="animate-fade-in">
        <h1 style={{ fontSize: '4rem', marginBottom: '20px', lineHeight: 1.1 }}>
          Sustainably Powered <br />
          <span style={{ color: '#10b981' }}>Artificial Intelligence</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px' }}>
          Harnessing the power of green energy to build the next generation of intelligent nodes for a smarter, cleaner future.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary">Get Started</button>
          <button style={{ 
            padding: '12px 24px', 
            background: 'transparent', 
            border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '8px', 
            color: 'white', 
            fontWeight: 600,
            cursor: 'pointer'
          }}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
