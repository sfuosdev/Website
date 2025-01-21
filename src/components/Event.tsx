import React, { useState } from "react";

type ProjectProps = {
  title: string;
  description: string;
  imgURLs: string[];
};

const Event: React.FC<ProjectProps> = ({
  title,
  description,
  imgURLs
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgURLs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imgURLs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row rounded-lg md:justify-between overflow-hidden">
      <div className="md:w-1/2">
        <div className="flex flex-row justify-start items-start space-x-4">
              <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        </div>
        <p className="mb-4">{description}</p>
      </div>

      {imgURLs.length > 0 && (
        <div className="md:w-1/2 w-full max-w-[325px] flex flex-col items-center justify-center mt-8 md:mt-0 relative">
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &#8249;
          </button>

          <img
            src={imgURLs[currentImageIndex]}
            alt={`${title} image ${currentImageIndex + 1}`}
            className="w-full object-cover rounded-md"
          />

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &#8250;
          </button>

          <div className="flex mt-4 space-x-2">
            {imgURLs.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;