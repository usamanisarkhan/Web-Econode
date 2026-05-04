import React from 'react';

const TeamCard = ({ name, role, email, linkedin, image }) => {
  return (
    <div className="glass glass-hover" style={{
      padding: '20px', /* Reduced from 30px */
      textAlign: 'center',
      transition: 'var(--transition)',
      flex: '1',
      minWidth: '280px',
      maxWidth: '350px',
    }}>
      <div style={{
        width: '100px', /* Slightly smaller avatar */
        height: '100px',
        borderRadius: '50%',
        margin: '0 auto 15px',
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
      <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{name}</h3>
      <p style={{ color: '#10b981', fontWeight: 700, fontSize: '1rem', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {role}
      </p>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '15px' }}>{email}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '10px 20px', fontSize: '1rem' }}>
        LinkedIn Profile
      </a>
    </div>
  );
};

export default TeamCard;
