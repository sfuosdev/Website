import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBasePath } from '../utils/basePath';

const Header = () => {
  const basePath = getBasePath();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <div className="relative">
      <header className="flex flex-row justify-between items-center bg-background-header px-6 md:px-12 h-[60px] md:h-20 w-full shadow-lg fixed top-0 left-0 z-10">
        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={menuOpen ? closeMenu : openMenu}
          id="menu-button"
          className="focus:outline-none md:hidden relative"
        >
          {/* Menu Icon */}
          <svg
            id="hamburger-icon"
            className={`flex-shrink-0 w-6 h-6 ${menuOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Close Icon */}
          <svg
            id="close-icon"
            className={`flex-shrink-0 w-6 h-6 ${menuOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Centered Club Logo */}
        <Link to="/" className="flex-shrink-0 mx-auto md:flex md:mx-0">
          <img src={`${basePath}/oslogo_transparent.svg`} alt="SFU OS Dev Club Logo" className="h-10 w-10 md:h-12 md:w-12" />
        </Link>

        {/* Empty Div for spacing on right side on small screens */}
        <div className="flex-shrink-0 w-6 md:hidden"></div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex flex-1 items-center justify-end">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-primary-light transition duration-300">About us</Link></li>
            <li><Link to="/projects" className="text-white hover:text-primary-light transition duration-300">Projects</Link></li>
            <li><Link to="/events" className="text-white hover:text-primary-light transition duration-300">Events</Link></li>
            <li><Link to="/teams" className="text-white hover:text-primary-light transition duration-300">Teams</Link></li>
            <li><Link to="/resources" className="text-white hover:text-primary-light transition duration-300">Resources</Link></li>
          </ul>
        </nav>
      </header>

      {/* Mobile Slide-Out Menu */}
      <nav
        className={`fixed top-0 left-0 w-72 h-full mt-[60px] bg-background-header text-white transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50`}
      >
        <div className="p-6">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" className="text-white hover:text-primary-light transition duration-300">About us</Link></li>
            <li><Link to="/projects" className="text-white hover:text-primary-light transition duration-300">Projects</Link></li>
            <li><Link to="/events" className="text-white hover:text-primary-light transition duration-300">Events</Link></li>
            <li><Link to="/teams" className="text-white hover:text-primary-light transition duration-300">Teams</Link></li>
            <li><Link to="/resources" className="text-white hover:text-primary-light transition duration-300">Resources</Link></li>
          </ul>
        </div>
      </nav>

      {/* Overlay to close the menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 mt-[60px] bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;
