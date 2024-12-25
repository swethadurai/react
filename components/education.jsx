import React, { useEffect } from 'react';
import './EducationSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="education-section">
      <h2 className="section-title">My Education</h2>
      <div className="cards-container">
        <div className="education-card" data-aos="fade-up">
          <h3>SSLC</h3>
          <p>School: ABC High School</p>
          <p>Marks: 90%</p>
        </div>
        <div className="education-card" data-aos="fade-up" data-aos-delay="100">
          <h3>HSC</h3>
          <p>School: XYZ Higher Secondary School</p>
          <p>Marks: 85%</p>
        </div>
        <div className="education-card" data-aos="fade-up" data-aos-delay="200">
          <h3>B.E CSE</h3>
          <p>College: DEF College of Engineering</p>
          <p>Marks: 80%</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
