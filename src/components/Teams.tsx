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
        <h2 className="section-title text-left font-club">Presidents</h2>

        <div className="flex flex-wrap gap-8 justify-start"> {/* Use gap instead of space-x for wrapping */}
          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="daniel-pham.png" alt="Daniel Pham" />
            <h3 className="text-xl font-semibold text-white mb-4">Daniel Pham</h3>
            <p className="text-gray-300">Co-President</p>
          </div>

          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="tommy.jfif" alt="Tommy Oh" />
            <h3 className="text-xl font-semibold text-white mb-4">Tommy (Kanggeon) Oh</h3>
            <p className="text-gray-300">Co-President</p>
          </div>
        </div>

        {/* Directors */}
        <h2 className="section-title text-left font-club">Directors</h2>

        <div className="flex flex-wrap gap-8 justify-start">
          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="sean.jfif" alt="Sean Wotherspoon" />
            <h3 className="text-xl font-semibold text-white mb-4">Sean Wotherspoon</h3>
            <p className="text-gray-300 text-center">Director of Technology</p>
          </div>

          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="daniel-ahn.jfif" alt="Daniel Ahn" />
            <h3 className="text-xl font-semibold text-white mb-4">Daniel Ahn</h3>
            <p className="text-gray-300">Director of Communications</p>
          </div>

          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="image.png" alt="Dhruv Gupta" />
            <h3 className="text-xl font-semibold text-white mb-4">Dhruv Gupta</h3>
            <p className="text-gray-300">Director of Strategy</p>
          </div>

          <div className="flex flex-col justify-start items-start text-left text-primary-light min-w-[250px] mb-8">
            <img className="max-w-[250px] mb-4 rounded-lg" src="jeeya.jfif" alt="Jeeya Parasbhai Khavadia" />
            <h3 className="text-xl font-semibold text-white mb-4">Jeeya Parasbhai Khavadia</h3>
            <p className="text-gray-300">Director of Events</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
