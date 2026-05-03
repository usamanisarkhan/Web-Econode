import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '60px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: '100px',
      background: 'rgba(0,0,0,0.3)'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Eco Node AI</h3>
        <p style={{ color: '#94a3b8' }}>Empowering intelligence, naturally.</p>
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</a>
      </div>
      <p style={{ color: '#475569', fontSize: '0.8rem' }}>
        © 2026 Eco Node AI. All rights reserved. Built with precision and care.
      </p>
    </footer>
  );
};

export default Footer;
