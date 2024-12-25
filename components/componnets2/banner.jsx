import React, { useEffect, useRef, useState } from 'react';
import './banner2.css';

const Banner2 = () => {
  const rightContentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

//   const handleMouseMove = (e) => {
//     const starCount = 5; // Number of stars
//     const starsContainer = document.getElementById('stars-container');
    
//     // Create stars at mouse position
//     for (let i = 0; i < starCount; i++) {
//       const star = document.createElement('div');
//       star.classList.add('star');
//       star.style.left = `${e.clientX + Math.random() * 20 - 10}px`; // Random position near the mouse
//       star.style.top = `${e.clientY + Math.random() * 20 - 10}px`; // Random position near the mouse
//       starsContainer.appendChild(star);

//       // Remove star after animation ends
//       setTimeout(() => {
//         star.remove();
//       }, 1500); // Star will last 1.5 seconds before disappearing
//     }
//   };

  useEffect(() => {
    const handleScroll = () => {
      const rect = rightContentRef.current.getBoundingClientRect();
      setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="banner2-container" >
      <div className="banner2-left-img">
        {/* <img src={pic} alt="Profile" className="banner2-image" /> */}
      </div>
      <div
        className={`banner2-right-content ${isVisible ? 'banner2-visible' : ''}`}
        ref={rightContentRef}
      >
        <h1 className="banner2-title">HELLO!</h1>
        <p className="banner2-name">I am Swetha Rajadurai</p>
        <p className="banner2-role">Front End Developer</p>
      </div>
      <div id="stars-container" className="stars-container" />
    </div>
  );
};

export default Banner2;
