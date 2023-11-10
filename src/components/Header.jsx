import React from 'react';

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
