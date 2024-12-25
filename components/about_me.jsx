import React, { useEffect } from 'react';
import './about_me.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import pic from './images/logo.png';

const handleMouseMove = (e) => {
  const starCount = 1;
  const starsContainer = document.getElementById('about-me-stars-container');

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('about-me-star');
    star.style.left = `${e.clientX + Math.random() * 20 - 10}px`;
    star.style.top = `${e.clientY + Math.random() * 20 - 10}px`;
    starsContainer.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1500);
  }
};

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div id="about-me-stars-container" className="about-me-stars-container"></div>
      <div className="about-me-section" onMouseMove={handleMouseMove}>
        <div className="about-me-left" data-aos="fade-right">
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-description">
            Hello! I am a passionate Front-End Developer with experience in building responsive, dynamic websites using the latest web technologies. I love solving complex problems and creating user-friendly interfaces. I constantly strive to improve my skills and stay updated with the latest trends in the tech world.
          </p>
          <div className="social-links" data-aos="fade-up">
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon github">
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>

        </div>
        <div className="about-me-right" data-aos="fade-left">
          <img src={pic} alt="Profile" className="about-me-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
