import React, { useEffect, useRef, useState } from "react";
import { getBasePath } from "../utils/basePath";

const Teams = () => {
  const basePath = getBasePath();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledLeft, setIsScrolledLeft] = useState(true);
  const [isScrolledRight, setIsScrolledRight] = useState(false);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } =
      scrollContainerRef.current!;
    setIsScrolledLeft(scrollLeft === 0);
    setIsScrolledRight(scrollLeft + clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section
        className="py-32 flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background/project.png')" }}
      >
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">
            Meet Our Executive Team
          </h1>
          <p className="text-xl mb-10 text-white">
            Get to know the passionate leaders driving innovation and
            collaboration at SFU Open Source Development Club. Our executive
            team is dedicated to empowering students, fostering open-source
            contributions, and building a vibrant developer community at SFU.
          </p>
          <a
            href="/"
            className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300"
          >
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto flex flex-col w-full py-16 px-6 sm:px-12">
        {/* Presidents */}
        <h2 className="section-title font-club text-center sm:text-left">
          Presidents
        </h2>

        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          <div className="flex flex-col justify-start sm:items-start text-center sm:text-left text-primary-light w-[250px] mb-8">
            <a
              href="https://www.linkedin.com/in/tommykanggeon-oh/"
              target="blank_"
            >
              <img
                className="max-w-[250px] mb-4 rounded-lg"
                src={`${basePath}/execs/tommy.jfif`}
                alt="Tommy Oh"
              />
            </a>
            <h3 className="text-xl font-semibold text-white mb-1">Tommy Oh</h3>
            <p className="text-primary-light mb-2">Co-President</p>
            <p className="text-gray-300 text-sm">
              With a passion for technology and community, Tommy focuses on
              creating an inclusive space for developers of all levels at SFU.
            </p>
          </div>

          <div className="flex flex-col justify-start sm:items-start text-center sm:text-left text-primary-light w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/yoonyou12/" target="blank_">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </a>
            <h3 className="text-xl font-semibold text-white mb-1">
              Yoonsang You
            </h3>
            <p className="text-primary-light mb-2">Co-President</p>
            <p className="text-gray-300 text-sm">
              Yoonsang is dedicated to fostering collaboration and innovation
              within the SFU developer community through open-source projects.
            </p>
          </div>
        </div>

        {/* Directors */}
        <h2 className="section-title font-club text-center sm:text-left">
          Directors
        </h2>

        <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
          <div className="flex flex-col justify-start sm:items-start text-center sm:text-left text-primary-light w-[250px] mb-8">
            <a
              href="https://www.linkedin.com/in/sean-wotherspoon/"
              target="blank_"
            >
              <img
                className="max-w-[250px] mb-4 rounded-lg"
                src={`${basePath}/execs/sean.jfif`}
                alt="Sean Wotherspoon"
              />
            </a>
            <h3 className="text-xl font-semibold text-white mb-1">
              Sean Wotherspoon
            </h3>
            <p className="text-primary-light mb-2">Director of Technology</p>
            <p className="text-gray-300 text-sm">
              Sean leads the technical direction, ensuring innovative solutions
              and high-quality standards in club projects.
            </p>
          </div>

          <div className="flex flex-col justify-start sm:items-start text-center sm:text-left text-primary-light w-[250px] mb-8">
            <a href="https://www.linkedin.com/in/dhruvgpt/" target="blank_">
              {/* <img className="max-w-[250px] mb-4 rounded-lg" src={`${basePath}/dhruv-gupta.jfif`} alt="Dhruv Gupta" /> */}
              <div className="w-full h-full max-w-[250px] max-h-[250px] mb-4 rounded-lg flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
            </a>
            <h3 className="text-xl font-semibold text-white mb-1">
              Dhruv Gupta
            </h3>
            <p className="text-primary-light mb-2">Director of Strategy</p>
            <p className="text-gray-300 text-sm">
              Dhruv develops and executes the club's strategic plans, driving
              growth and sustainability for future initiatives.
            </p>
          </div>
        </div>
        {/* Directors */}
        <h2 className="section-title font-club text-center sm:text-left">
          Coordinators
        </h2>
      </section>
    </div>
  );
};

export default Teams;
