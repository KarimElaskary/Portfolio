import React from 'react';

const Header = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-6 py-[20px]'>
        <li className='nav-links'>
          <a href='#my-work'>Work</a>
        </li>
        <li className='nav-links'>
          <a href='#about-me'>About</a>
        </li>
        <li className='nav-links'>
          <a href='#footer' className='gradient-text'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
