import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-background-light py-4 shadow-lg">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/oslogo_transparent.svg" alt="SFU OS Dev Club Logo" className="h-12 w-12" />
          <span className="font-bold text-2xl text-gradient">SFU Open Source Development Club</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-primary-light transition duration-300">About us</Link></li>
          <li><Link to="/projects" className="text-white hover:text-primary-light transition duration-300">Projects</Link></li>
          <li><Link to="/events" className="text-white hover:text-primary-light transition duration-300">Events</Link></li>
          <li><Link to="/teams" className="text-white hover:text-primary-light transition duration-300">Teams</Link></li>
          <li><Link to="/resources" className="text-white hover:text-primary-light transition duration-300">Resources</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header