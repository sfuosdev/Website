import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imgURL: string;
  githubURL: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imgURL,
  githubURL
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg md:justify-between overflow-hidden">
      <div className="md:w-1/2">
        <div className="flex flex-row justify-start items-start space-x-4">
            <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
            <a href={githubURL} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-github hover:fill-primary-light transition-all duration-300" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
        </div>
        <p className="mb-4">{description}</p>
        <a href="#" className="inline-flex items-center px-4 py-2 btn btn-primary text-center text-white transition duration-300 cursor-pointer">
            ./DETAILS
        </a>
      </div>
      {imgURL && (
        <div className="md:w-1/2 w-full max-w-[325px] flex items-center justify-center mt-8 md:mt-0">
          <img src={imgURL} alt={title} className="w-full object-cover rounded-md" />
        </div>
      )}
    </div>
  );
};

export default Project;
