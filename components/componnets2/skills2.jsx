import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this is imported
import './skills.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGithub /> },
  { name: 'Python', icon: <FaJs /> },
  { name: 'Java', icon: <FaJs /> },
  { name: 'Django', icon: <FaReact /> },
];

const Skills2 = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Animation will only happen once
      easing: 'ease-out', // Smooth easing for the effect
      offset: 150,     // Offset for triggering the animation
    });
  }, []);

  return (
    <section className="skill2-section">
      <h2 className="skill2-heading">My Skill2s</h2>
      <div className="skill2-container">
        {skills.map((skill2, index) => (
          <div 
            key={index} 
            className="skill2-card" 
            data-aos="zoom-in"  // AOS zoom-in effect
            data-aos-delay={index * 100} // Delay to stagger animations
          >
            <div className="skill2-icon">{skill2.icon}</div>
            <h3 className="skill2-name">{skill2.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills2;
