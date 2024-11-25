import React, { useState } from 'react'
import Project from './Project'
import { ProjectType } from '../interfaces/project-type'

const onGoingProjectsList: ProjectType[] = [
  {
    title: 'Financial Fast Feed',
    description: 'Financial Fast Feed aggregates and summarizes news from 9 different financial sources, including Crypto, Economic, and Stock Market updates. Powered by GPT-3.5, it offers quick insights into market trends and financial news, helping users stay informed with concise summaries from diverse perspectives.',
    imgURL: 'projects/financial-fast-feed.jpg',
    githubURL: 'https://github.com/sfuosdev/financial-fast-feed'
  },
  {
    title: 'CourseCompass',
    description: 'Course Compass is a platform designed to help students select courses and plan their degrees. By providing course ratings, reviews, and calendars, students can make informed decisions and share insights with others. Built with Next.js, React, MongoDB, and Tailwind CSS, the project emphasizes team collaboration and version control best practices.',
    imgURL: 'projects/course-compass.jpg',
    githubURL: 'https://github.com/JoaoIshida/CourseCompass'
  }
];

const pastProjectsList: ProjectType[] = [
  {
    title: "SWE Resume Evaluator SaaS",
    description: "SWE Resume Evaluator is a Software-as-a-Service (SaaS) web application that uses Naive Bayes classifiers to assess users' resumes for their suitability for various software engineering positions, such as SWE, ML, and QA.",
    imgURL: "projects/swe-resume-evaluator.png",
    githubURL: "https://github.com/sfuosdev/swe-resume-evaluator"
  },
  {
    title: "MACM316",
    description: "Macm316 provides a visualization and plotting tool for numerical methods in Numerical Analysis.",
    imgURL: "projects/macm316.png",
    githubURL: "https://github.com/sfuosdev/Macm316"
  },
  {
    title: "PituPiPy",
    description: "PituPiPy is a Python implementation of P2P (peer-to-peer) networking program that enables users to message and share files within in a P2P network pool.",
    imgURL: "projects/pitupipy.jpg",
    githubURL: "https://github.com/sfuosdev/PituPiPy"
  },
  {
    title: "SFU-RMP",
    description: "Chrome extension for SFU students to provide access to prof rating from RateMyProfessor.com on SFU course registration pages (goSFU, mySchedule)",
    imgURL: "projects/sfu-rmp.png",
    githubURL: "https://github.com/sfuosdev/SFU-RMP",
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ONGOING');

  const renderProjectsList = () => {
    let projectsList = [];
    let message = '';

    if (activeTab === 'ONGOING') {
      projectsList = onGoingProjectsList;
      message = projectsList.length === 0 ? 'No ongoing projects at the moment.' : '';
    } else {
      projectsList = pastProjectsList;
      message = projectsList.length === 0 ? 'No past projects available.' : '';
    }

    if (projectsList.length === 0 && message) {
      return <p>{message}</p>;
    }

    return projectsList.map((project, index) => (
      <Project
        key={index}
        title={project.title}
        description={project.description}
        imgURL={project.imgURL}
        githubURL={project.githubURL}
      />
    ));
  };

  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section className="bg-gradient-2 py-32 flex flex-col justify-center items-start">
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">Projects</h1>
          <p className="text-xl mb-10 text-white">
          Dive into the groundbreaking projects shaping innovation and collaboration at SFU Open Source Development Club. Our open-source initiatives empower students, advance technology, and contribute to a thriving global developer community.
          </p>
          <a href="/" className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300">
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>

      {/* Projects and Beyond Section */}
      <section id="about" className="container mx-auto flex flex-col w-full py-16 px-4">
        <h2 className="section-title text-left font-club">Empowering Developers and Beyond</h2>

        {/* Content Wrapper */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          {/* Left Side (text) */}
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              At the <strong className="text-primary">SFU Open Source Development Club</strong>, we believe in fostering a community where developers can grow not only their <strong className="text-primary">technical skills</strong> but also their <strong className="text-primary">leadership</strong>, <strong className="text-primary">collaboration</strong>, and <strong className="text-primary">problem-solving abilities</strong>. Our initiatives go beyond writing code—whether it's through engaging <strong className="text-primary">workshops</strong>, <strong className="text-primary">mentorship opportunities</strong>, or contributions to meaningful <strong className="text-primary">projects</strong>, we aim to empower members to make an <strong className="text-primary">impact</strong> in the tech world and beyond. Together, we create an environment that nurtures <strong className="text-primary">innovation</strong>, <strong className="text-primary">inclusivity</strong>, and <strong className="text-primary">continuous learning</strong>.
            </p>
          </div>

          {/* Right Side (button links) */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end space-y-6">
            <a href="#projects-section" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300" onClick={() => setActiveTab('ONGOING')}>
              <p className="mr-4">&gt;</p>./ONGOING_PROJS
            </a>
            <a href="#projects-section" className="flex flex-row px-4 py-2 rounded w-full max-w-[325px] btn btn-primary text-left text-white transition duration-300" onClick={() => setActiveTab('PAST')}>
              <p className="mr-4">&gt;</p>./PAST_PROJS
            </a>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects-section" className="container mx-auto px-4 py-12">
        <h2 className="section-title text-left font-club">Our Projects</h2>
        <div className="flex space-x-4 mb-8">
          <span className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${activeTab === 'ONGOING' ? 'bg-[#D55FFF]' : 'bg-[#636C9E]'}`} onClick={() => setActiveTab('ONGOING')}>ONGOING</span>
          <span className={`px-4 py-2 btn text-center text-white transition duration-300 cursor-pointer ${activeTab === 'PAST' ? 'bg-[#D55FFF]' : 'bg-[#636C9E]'}`} onClick={() => setActiveTab('PAST')}>PAST</span>
        </div>

        <div className="space-y-12">
          {renderProjectsList()}
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

export default Projects