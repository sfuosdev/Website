import React from 'react'

const Teams = () => {
  const executives = [
    { name: 'Jane Doe', role: 'President', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80' },
    { name: 'John Smith', role: 'Vice President', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80' },
    { name: 'Emily Brown', role: 'Secretary', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80' },
    { name: 'Michael Lee', role: 'Treasurer', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80' },
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="section-title text-center">Meet Our Team</h1>
      <p className="text-lg text-center max-w-2xl mx-auto">
        Our club is run by a dedicated team of student leaders passionate about open-source development and technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {executives.map((exec, index) => (
          <div key={index} className="bg-background-light p-6 rounded-lg shadow-md text-center">
            <img src={exec.photo} alt={exec.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-xl font-semibold text-primary-light">{exec.name}</h2>
            <p className="text-gray-300">{exec.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams