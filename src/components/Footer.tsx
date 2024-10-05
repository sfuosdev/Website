import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const handleSocialClick = (platform: string, url: string) => {
    alert(`You're being redirected to our ${platform} page.`)
    window.open(url, '_blank')
  }

  return (
    <footer className="bg-background-light text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <img src="/oslogo_transparent.svg" alt="SFU OS Dev Club Logo" className="h-12 w-12 mb-2" />
            <h3 className="text-xl font-semibold">SFU OS Dev Club</h3>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link to="/" className="hover:text-primary-light transition duration-300">Home</Link>
            <Link to="/projects" className="hover:text-primary-light transition duration-300">Projects</Link>
            <Link to="/events" className="hover:text-primary-light transition duration-300">Events</Link>
            <Link to="/teams" className="hover:text-primary-light transition duration-300">Teams</Link>
            <Link to="/resources" className="hover:text-primary-light transition duration-300">Resources</Link>
          </nav>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => handleSocialClick('Instagram', 'https://www.instagram.com/sfuosdev')}
            className="text-gray-400 hover:text-primary-light transition duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </button>
          <button
            onClick={() => handleSocialClick('GitHub', 'https://github.com/sfuosdev')}
            className="text-gray-400 hover:text-primary-light transition duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </button>
          <button
            onClick={() => handleSocialClick('LinkedIn', 'https://www.linkedin.com/company/sfuosdev')}
            className="text-gray-400 hover:text-primary-light transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </button>
        </div>
        <p className="text-center text-sm text-gray-400">© {new Date().getFullYear()} SFU Open Source Development Club. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer