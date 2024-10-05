import React from 'react'
import { Code, Users, Zap } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-20">
      <section className="bg-gradient py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">SFU OS Dev Club</h1>
          <p className="text-xl mb-10 text-white max-w-2xl mx-auto">Empowering students to innovate, collaborate, and contribute to open-source projects that make a difference.</p>
          <a href="#about" className="btn btn-primary">
            Discover More
          </a>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-20">
        <h2 className="section-title text-center">Who We Are</h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              We are a dynamic student club at SFU, bringing together talented individuals from tech, design, and business backgrounds. Our mission is to foster innovation and collaboration through open-source development projects that benefit our community and beyond.
            </p>
            <p className="text-lg mb-6">
              By joining the SFU Open Source Development Club, you'll be part of a vibrant community dedicated to making a positive impact through technology and teamwork. We offer opportunities to work on real-world projects, develop leadership skills, and network with like-minded individuals.
            </p>
            <a href="#" className="btn btn-secondary">Join Our Community</a>
          </div>
          <div className="md:w-1/2 space-y-6">
            <a href="/projects" className="block w-full btn btn-primary text-center">
              Explore Our Projects
            </a>
            <a href="/events" className="block w-full btn btn-primary text-center">
              Upcoming Events
            </a>
            <a href="/teams" className="block w-full btn btn-primary text-center">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="section-title text-center">Why Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-background-light p-8 rounded-lg text-center shadow-lg">
            <Code size={48} className="mx-auto mb-4 text-primary-light" />
            <h3 className="text-xl font-semibold mb-4">Real-World Experience</h3>
            <p className="text-gray-300">Work on meaningful projects that solve actual problems and make a difference in the community.</p>
          </div>
          <div className="bg-background-light p-8 rounded-lg text-center shadow-lg">
            <Users size={48} className="mx-auto mb-4 text-primary-light" />
            <h3 className="text-xl font-semibold mb-4">Leadership Opportunities</h3>
            <p className="text-gray-300">Take charge of projects and develop valuable leadership and management skills.</p>
          </div>
          <div className="bg-background-light p-8 rounded-lg text-center shadow-lg">
            <Zap size={48} className="mx-auto mb-4 text-primary-light" />
            <h3 className="text-xl font-semibold mb-4">Networking</h3>
            <p className="text-gray-300">Connect with fellow students, industry professionals, and potential employers.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl mb-10 text-white max-w-2xl mx-auto">Join SFU OS Dev Club and start your journey in open-source development today!</p>
          <a href="#" className="btn bg-white text-primary-dark hover:bg-gray-100">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home