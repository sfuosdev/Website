import React, { useEffect, useRef, useState } from 'react';

const Teams = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current!;
    setIsScrolledLeft(scrollLeft === 0);
    setIsScrolledRight(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section className="bg-gradient-2 py-32 flex flex-col justify-center items-start">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">Meet Our Executive Team</h1>
          <p className="text-xl mb-10 text-white">
            Get to know the passionate leaders driving innovation and collaboration at SFU Open Source Development Club. Our executive team is dedicated to empowering students, fostering open-source contributions, and building a vibrant developer community at SFU.
          </p>
          <a href="/" className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300">
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto flex flex-col w-full py-16 px-4">
        {/* Presidents */}
        <h2 className="section-title font-club text-center sm:text-left">Presidents</h2>

        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          
          <div className="flex flex-col justify-start sm:items-start text-center sm:text-left text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/daniel-pham-5b4873286/" target="blank_">
              <img className="max-w-[250px] mb-4 rounded-lg" src="daniel-pham.png" alt="Daniel Pham" />
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Daniel Pham</h3>
            <p className="text-gray-300">Co-President</p>
          </div>
        
          <div className="flex flex-col justify-start sm:items-start text-center text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/tommy-oh-766450217/" target="blank_">
              <img className="max-w-[250px] mb-4 rounded-lg" src="tommy.jfif" alt="Tommy Oh" />
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Tommy (Kanggeon) Oh</h3>
            <p className="text-gray-300">Co-President</p>
          </div>
          
        </div>

        {/* Directors */}
        <h2 className="section-title font-club text-center sm:text-left">Directors</h2>

        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">

          <div className="flex flex-col justify-start sm:items-start text-center text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/sean-wotherspoon/" target="blank_">
              <img className="max-w-[250px] mb-4 rounded-lg" src="sean.jfif" alt="Sean Wotherspoon" />
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Sean Wotherspoon</h3>
            <p className="text-gray-300 text-center">Director of Technology</p>
          </div>
          
          <div className="flex flex-col justify-start sm:items-start text-center text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/daniel-ahn-59b649297/" target="blank_">
              <img className="max-w-[250px] mb-4 rounded-lg" src="daniel-ahn.jfif" alt="Daniel Ahn" />
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Daniel Ahn</h3>
            <p className="text-gray-300">Director of Communications</p>
          </div>
          

          <div className="flex flex-col justify-start sm:items-start text-center text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/dhruvgpt/" target="blank_">
              {/* <img className="max-w-[250px] mb-4 rounded-lg" src="image.png" alt="Dhruv Gupta" /> */}
              <div className="w-full h-full max-w-[250px] max-h-[250px] mb-4 rounded-lg flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
              </div>
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Dhruv Gupta</h3>
            <p className="text-gray-300">Director of Strategy</p>
          </div>
          
          <div className="flex flex-col justify-start sm:items-start text-center text-primary-light min-w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/jeeya-parasbhai-khavadia-55b243239/" target="blank_">
              <img className="max-w-[250px] mb-4 rounded-lg" src="jeeya.jfif" alt="Jeeya Parasbhai Khavadia" />
            </a>
            <h3 className="text-xl font-semibold text-white mb-4">Jeeya Parasbhai Khavadia</h3>
            <p className="text-gray-300">Director of Events</p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Teams;
