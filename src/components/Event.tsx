import React from "react";

type ProjectProps = {
  title: string;
  description: string;
  imgURL: string;
};

const Event: React.FC<ProjectProps> = ({
  title,
  description,
  imgURL
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg md:justify-between overflow-hidden">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      {imgURL && (
        <div className="md:w-1/2 w-full max-w-[325px] flex items-center justify-center mt-8 md:mt-0">
          <img src={imgURL} alt={title} className="w-full object-cover rounded-md" />
        </div>
      )}
    </div>
  );
};

export default Event;
