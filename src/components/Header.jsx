import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className='flex items-center justify-center gap-6 py-[20px]'>
        <li className='nav-links'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-links'>
          <Link to='Projects'>Work</Link>
        </li>
        <li className='nav-links'>
          <Link to='/About'>About</Link>
        </li>
        <li className='nav-links'>
          <Link to='/Contact' className='gradient-text'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
