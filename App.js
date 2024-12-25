import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner'; 
import Banner2 from './components/componnets2/banner';
import AboutMe from './components/about_me';
import AboutMe2 from './components/componnets2/about_me2'; 
import Experience from './components/experiance';
import Experience2 from './components/componnets2/experiance';
import Myworks2 from './components/componnets2/my_works';
import Mywork from './components/my_work'
import Skills2 from './components/componnets2/skills2';
import Skill from './components/skills.jsx'
import Education2Section from './components/componnets2/education.jsx';
import EducationSection from './components/education.jsx'
import Contact2Section from './components/componnets2/contact.jsx';
import ContactSection from './components/contact.jsx'
import Footer2 from './components/componnets2/footer.jsx';
import Footer from './components/footer.jsx'
import "@fontsource/poppins"; 
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css"; 

function App() {
  const [useDuplicate, setUseDuplicate] = useState(false); 
  const [fadeClass, setFadeClass] = useState('fade-in'); 

 
  const handleThemeClick = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setUseDuplicate(!useDuplicate); // Toggle between original and duplicate components
      setFadeClass('fade-in');
    }, 500); // Match the timeout with your fade duration
  };

  useEffect(() => {
    setFadeClass('fade-in'); // Reset fade-in when switching between original and duplicate
  }, [useDuplicate]);

  return (
    <div>
      <Navbar onThemeClick={handleThemeClick} />
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for Banner */}
        {useDuplicate ? <Banner2 /> : <Banner />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <AboutMe2 /> : <AboutMe />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Experience2 /> : <Experience />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Myworks2 /> : <Mywork />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Skills2 /> : <Skill />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Education2Section /> : <EducationSection />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Contact2Section /> : <ContactSection />}
      </div>
      <div className={`component-wrapper ${fadeClass}`}>
        {/* Conditional rendering for AboutMe */}
        {useDuplicate ? <Footer2 /> : <Footer />}
      </div>
    </div>
  );
}

export default App;
