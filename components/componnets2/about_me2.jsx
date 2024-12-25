import React, { useEffect } from 'react';
import './about_me.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import pic from '../images/logo.png';

const AboutMe2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div id="about-me2-stars-container" className="about-me2-stars-container"></div>
      <div className="about-me2-section" >
        <div className="about-me2-left" data-aos="fade-right">
          <h2 className="about-me2-title">About Me</h2>
          <p className="about-me2-description">
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
        <div className="about-me2-right" data-aos="fade-left">
          <img src={pic} alt="Profile" className="about-me2-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe2;
