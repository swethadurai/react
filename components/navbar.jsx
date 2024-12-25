import React from 'react';
import './navbar.css';
import logo from './images/logo.png';
import theme from './images/theme.png';

const Navbar = ({ onThemeClick }) => {
  return (
    <nav className='flex justify-evenly bg-black text-white items-center'>
      <div>
        <img src={logo} alt="" width="100px" height="100px" />
      </div>
      <div>
        <ul className='flex flex-row'>
          <li className='px-5'>About Me</li>
          <li className='px-5'>Education</li>
          <li className='px-5'>Experience</li>
          <li className='px-5'>My Works</li>
        </ul>
      </div>
      <div>
        <button className='px-5 border-2 border-red-800 rounded-3xl py-1.5 mx-5'>
          Contact
        </button>
        <button className='bg-red-800 rounded-3xl px-5 py-1.5 border-2 border-red-800'>
          Download cv
        </button>
      </div>
      <img 
        src={theme} 
        width="50px" 
        height="50px" 
        onClick={onThemeClick} 
        alt="theme toggle"
      />
    </nav>
  );
};

export default Navbar;
