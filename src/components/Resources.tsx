import React from 'react'
import { Github, FileText } from 'lucide-react'

const Resources = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold" style={{textAlign: "center",}}>Resources</h1>
      <p className="text-lg" style={{textAlign: "center",}}>
        Access our curated collection of programming resources, tutorials, and documentation to support your learning journey.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <a 
          href="https://www.notion.so/programming-club/resources" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-lg"
        >
          <Github size={24} className="mr-2" />
          SFU OS Dev club Github Organization
        </a>
        <a 
          href="https://docs.programming-club.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 text-lg"
        >
          <FileText size={24} className="mr-2" />
          Documentation
        </a>
      </div>
    </div>
  )
}

export default Resources