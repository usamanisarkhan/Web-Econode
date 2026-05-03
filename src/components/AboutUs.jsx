import React from 'react';
import TeamCard from './TeamCard';
import usamaImg from '../assets/team/Usama.png';
import zahraImg from '../assets/team/Zahra.png';
import mustafizurImg from '../assets/team/Mustafizur.png';

const AboutUs = () => {
  const team = [
    {
      name: 'Usama Nisar',
      role: 'Lead AI Engineer',
      email: 'iusni001@edu.xamk.fi',
      linkedin: 'https://www.linkedin.com/in/usama-nisar/',
      image: usamaImg
    },
    {
      name: 'Zahra Sasannia',
      role: 'AI & Systems Specialist',
      email: 'izasa001@edu.xamk.fi',
      linkedin: 'https://www.linkedin.com/in/zahra-sasannia/',
      image: zahraImg
    },
    {
      name: 'Mustafizur Rahman',
      role: 'AI & Electrical Lead',
      email: 'imdra006@edu.xamk.fi',
      linkedin: 'https://www.linkedin.com/in/md-mustafizur-rahman-53b068275/',
      image: mustafizurImg
    }
  ];

  return (
    <section id="about">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="section-title">Innovating for a Greener Tomorrow</h2>
        <p style={{ color: '#94a3b8', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          Eco Node AI is dedicated to pushing the boundaries of artificial intelligence while maintaining a core commitment to sustainability. Our team of experts combines deep technical knowledge in AI with a passion for electrical engineering and environmental stewardship.
        </p>
      </div>

      <div id="team">
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Meet Our Core Team</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          marginTop: '40px'
        }}>
          {team.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
