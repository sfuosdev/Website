import React from "react";
import { Github, FileText } from "lucide-react";

const Resources = () => {
  return (
    <div className="mt-[60px] md:mt-[80px]">
      {/* Hero Section */}
      <section className="bg-gradient-2 py-32 flex flex-col justify-center items-start">
        <div className="container mx-auto px-6 sm:px-12">
          <h1 className="text-6xl font-bold font-club mb-6 text-white">
            Resources
          </h1>
          <p className="text-xl mb-10 text-white">
            Access our curated collection of programming resources, tutorials,
            and documentation to support your learning journey.
          </p>
          <a
            href="/"
            className="btn btn-primary flex flex-row px-4 py-2 rounded w-56 text-white transition duration-300"
          >
            <p className="mr-4">&gt;</p>./HOME
          </a>
        </div>
      </section>

      <section
        id="projects-section"
        className="container mx-auto py-16 px-6 sm:px-12"
      >
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Collaborate with Us Column */}
            <div className="flex-1 space-y-6">
              <h2 className="section-title text-left font-club">
                Collaborate with Us
              </h2>
              <a
                href="https://github.com/sfuosdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn btn-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-github mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                GitHub
              </a>

              <a
                href="https://discord.gg/YyM3BnpZK2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn btn-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-discord mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
                Discord
              </a>
            </div>

            {/* Learn and Explore Column */}
            <div className="flex-1 space-y-6">
              <h2 className="section-title text-left font-club">
                Learn and Explore
              </h2>
              <a
                href="https://sfuosdev.github.io/Docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn btn-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-file-earmark-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2z" />
                </svg>
                Documentation
              </a>

              <a
                href="https://www.notion.so/programming-club/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center btn btn-third"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-bookmark-plus-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
                  />
                </svg>
                Additonal Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Banner Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-club mb-6 text-white">
            Start Your Journey With Us
          </h2>
          <div className="flex justify-center">
            <a
              href="https://go.sfss.ca/clubs/867/info"
              className="flex flex-row px-4 py-2 rounded w-full max-w-[255px] btn btn-primary text-left text-white transition duration-300"
            >
              <p className="mr-4">&gt;</p>./START_UR_JOURNEY
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
