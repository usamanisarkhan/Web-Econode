import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1100px',
      zIndex: 1000,
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="Eco Node AI" style={{ height: '32px' }} />
        <span style={{ fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>Eco Node AI</span>
      </div>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Home</a>
        <a href="#about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>About</a>
        <a href="#team" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Team</a>
      </div>
    </nav>
  );
};

export default Navbar;
