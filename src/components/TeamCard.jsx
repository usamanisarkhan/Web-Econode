import React from 'react';

const TeamCard = ({ name, role, email, linkedin, image }) => {
  return (
    <div className="glass glass-hover" style={{
      padding: '30px',
      textAlign: 'center',
      transition: 'var(--transition)',
      flex: '1',
      minWidth: '280px',
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        margin: '0 auto 20px',
        overflow: 'hidden',
        border: '3px solid #10b981',
        boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
        background: '#1e293b'
      }}>
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{name}</h3>
      <p style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {role}
      </p>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>{email}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
        LinkedIn Profile
      </a>
    </div>
  );
};

export default TeamCard;
