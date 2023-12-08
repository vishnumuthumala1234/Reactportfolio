import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Initialize with the ID of the default active link
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNav(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#0a192f] text-gray-300'}`} style={{ zIndex: 1000 }}>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '200px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link
            to='home'
            smooth={true}
            duration={500}
            className={activeLink === 'home' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            duration={500}
            className={activeLink === 'about' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='skills'
            smooth={true}
            duration={500}
            className={activeLink === 'skills' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='education'
            smooth={true}
            duration={500}
            className={activeLink === 'education' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('education')}
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            to='work'
            smooth={true}
            duration={500}
            className={activeLink === 'work' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('work')}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            duration={500}
            className={activeLink === 'contact' ? 'text-white font-bold' : 'text-gray-300'}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
        } ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#0a192f] text-gray-300'}`}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={() => handleLinkClick('home')} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => handleLinkClick('about')} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => handleLinkClick('skills')} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => handleLinkClick('work')} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={() => handleLinkClick('contact')} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGvpgfFg6NO5wAAAYw8Z-T4uTDsMCqXzT1Unllbm2IH3pGFvlOBeRMoPV9iM5CwSPiCqwejVHyaaKwo6VdvnABXarDtf3yown8lgMX5X_RdRujv19Yhpg3DyegXPvxs1_ss5Ng=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvishnu-vardhan-reddy-9b237817a%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app'
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/_vishnu.reddy__/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
              target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/#inbox'
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/vishnumuthumala1234'
              target="_blank"
            >
              GitHub<FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Dark mode toggle */}
      <div className='fixed top-4 right-4'>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
        <p className={darkMode ? 'text-white' : 'text-gray-300'}>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
      <tr></tr>
    </div>
  );
};

export default Navbar;