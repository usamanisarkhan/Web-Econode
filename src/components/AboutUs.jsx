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
    <section id="about" style={{ padding: '20px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '3rem' }}>Future-Ready Intelligence</h2>
        <p style={{ color: '#94a3b8', maxWidth: '1000px', margin: '0 auto', fontSize: '1.4rem' }}>
          Sustainable AI, built by experts in energy and environmental stewardship.
        </p>
      </div>

      <div id="team">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          marginTop: '10px'
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
