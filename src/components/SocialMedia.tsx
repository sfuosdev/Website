import React from 'react'
import { ExternalLink } from 'lucide-react'

const SocialMedia = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Connect with Us</h1>
      <p className="text-lg">
        Stay connected with the Programming Club through our various social media channels. 
        Follow us for the latest updates, events, and coding tips!
      </p>
      <div className="text-center">
        <a 
          href="https://linktr.ee/programmingclub" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-lg"
        >
          <ExternalLink size={24} className="mr-2" />
          Visit our Linktree
        </a>
      </div>
    </div>
  )
}

export default SocialMedia