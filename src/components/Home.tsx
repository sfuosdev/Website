import React from 'react'

const Home = () => {
  return (
    <div className="mt-[60px] md:mt-[80px]">

      {/* Hero Section */}
      <section className="bg-gradient-2 py-32 flex flex-col justify-center items-start">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">SFU OS Dev Club</h1>
          <p className="text-xl mb-10 text-white">Join SFU Open Source Development Club and collaborate with tech, design, and business students on projects that make a real impact. Build, learn, and grow together as we drive positive change through technology.</p>
          <a
            href="#about"
            className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300"
          >
            <p className="mr-4">&gt;</p>./ABOUT_US
          </a>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="about" className="container mx-auto flex flex-col w-full py-16 px-4">
        <h2 className="section-title text-left font-club">Who We Are</h2>

        {/* Content Wrapper */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* Left Side (text) */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              We are a student club at SFU aimed at bringing together talented individuals from <strong className="text-primary">tech, design, and business</strong>. Our primary goal is to collaborate on projects that <strong className="text-primary">contribute to the community</strong> while providing valuable <strong className="text-primary">learning opportunities</strong> for our members. 
            </p>
            <p className="text-lg mb-6">
            Join us at the SFU Open Source Development Club and be part of a community dedicated to making a positive impact through technology and collaboration..
            </p>
          </div>

          {/* Right Side (button links) */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end space-y-6">
            <a href="/projects" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300">
              <p className="mr-4">&gt;</p>./PROJECTS
            </a>
            <a href="/events" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300">
              <p className="mr-4">&gt;</p>./EVENTS
            </a>
            <a href="/teams" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300">
              <p className="mr-4">&gt;</p>./TEAMS
            </a>
          </div>
        </div>
        
      </section>

      {/* Our Value to You Section*/}
      <section className="container mx-auto px-4 py-16">

        <h2 className="section-title text-center font-club md:text-left">Our Value to You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="flex flex-col items-center p-8 text-center text-primary-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-briefcase-fill mb-4" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
            </svg>
            <h3 className="text-xl font-semibold text-white mb-4">Real-World Experience</h3>
            <p className="text-gray-300"><strong className="text-primary">Tackle</strong> real-world challenges through <strong className="text-primary">hands-on projects</strong>.</p>
          </div>

          <div className="flex flex-col items-center p-8 text-center text-primary-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-flag-fill mb-4" viewBox="0 0 16 16">
            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
          </svg>
            <h3 className="text-xl font-semibold text-white mb-4">Leadership Opportunities</h3>
            <p className="text-gray-300"><strong className="text-primary">Gain</strong> leadership experience by leading <strong className="text-primary">impactful projects</strong>.</p>
          </div>

          <div className="flex flex-col items-center p-8 text-center text-primary-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-people-fill mb-4" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
            <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
            <p className="text-gray-300"><strong className="text-primary">Connect</strong> and collaborate with a community of <strong className="text-primary">talented peers</strong>.</p>
          </div>
        </div>

      </section>

      {/* Join Us CTA Banner Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-club mb-6 text-white">Start Your Journey With Us</h2>
          <div className="flex justify-center">
            <a href="/projects" className="flex flex-row px-4 py-2 rounded w-full max-w-[255px] btn btn-primary text-left text-white transition duration-300">
              <p className="mr-4">&gt;</p>./START_UR_JOURNEY
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home