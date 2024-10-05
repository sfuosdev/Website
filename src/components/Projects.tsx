import React from 'react'

const Projects = () => {
  return (
    <div className="space-y-12">
      <section className="bg-gray-700 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4">Projects</h1>
          <p className="text-xl mb-8">[some brief description]</p>
          <a href="/" className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300">
            ./HOME
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">We Are Not All About Coding</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              We are a student club at SFU aimed at bringing together talented individuals from tech, design, and business. Our primary goal is to collaborate on projects that contribute to the community while providing valuable learning opportunities for our members.
            </p>
            <p className="text-lg">
              Join us at the SFU Open Source Development Club and be part of a community dedicated to making a positive impact through technology and collaboration.
            </p>
          </div>
          <div className="md:w-1/2 space-y-4">
            <a href="#" className="block w-full px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300 text-center">
              ./ONGOING_PROJS
            </a>
            <a href="#" className="block w-full px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300 text-center">
              ./PAST_PROJS
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Our Projects</h2>
        <div className="flex space-x-4 mb-8">
          <span className="px-4 py-2 bg-gray-700 rounded-full">PAST</span>
          <span className="px-4 py-2 bg-purple-600 rounded-full">ONGOING</span>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden">
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-bold mb-4">[Proj 1 Name]</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300">
                ./DETAILS
              </a>
            </div>
            <div className="md:w-1/3 bg-gray-700 flex items-center justify-center text-2xl">PLACEHOLDER</div>
          </div>
          <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden">
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-bold mb-4">[Proj 2 Name]</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <a href="#" className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300">
                ./DETAILS
              </a>
            </div>
            <div className="md:w-1/3 bg-gray-700 flex items-center justify-center text-2xl">PLACEHOLDER</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8">Start Your Journey With Us</h2>
        <a href="#" className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300">
          ./START_UR_JOURNEY
        </a>
      </section>
    </div>
  )
}

export default Projects