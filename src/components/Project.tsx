import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imgURL: string;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imgURL,
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg md:justify-between overflow-hidden">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href="#" className="inline-flex items-center px-4 py-2 btn btn-primary text-center text-white transition duration-300 cursor-pointer">
            ./DETAILS
        </a>
      </div>
      <div className="md:w-1/2 bg-gray-700 w-full max-w-[325px] flex items-center justify-center mt-8 md:mt-0">
        <img src={imgURL} alt={title} className="w-full object-cover rounded-md" />
      </div>
    </div>
  );
};

export default Project;
