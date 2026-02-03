import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-9xl font-bold logo-gradient mb-8">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-300 max-w-lg mb-10">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
