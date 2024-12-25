import React, { useEffect } from 'react';
import './Experiance.css';
import leadLogo from './images/LeadTap-Logo.png';
import salesqueenLogo from './images/salesqueen-logo.png';  // Adjust filename as needed

const Experience = () => {
    useEffect(() => {
        const handleScroll = () => {
          const cards = document.querySelectorAll('.experience-card');
          cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
              card.classList.add('scroll-reveal');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2022 - Present',
      description: 'Working on creating responsive, interactive web applications with React and TailwindCSS.',
      logo: leadLogo,  // Reference the imported image directly
      alignment: 'left'
    },
    {
      title: 'Web Designer',
      company: 'Creative Agency',
      duration: 'Aug 2020 - Dec 2021',
      description: 'Designed and developed visually appealing websites with a focus on UX/UI design principles.',
      logo: salesqueenLogo,  // Reference the imported image directly
      alignment: 'right'
    },
  ];

  return (
    <section className="experience-section">
      <h2 className="section-heading">Experience and Skill Set</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className={`experience-card ${exp.alignment}`} key={index}>
            <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
            <div className="experience-content">
              <h3 className="experience-title">{exp.title}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
