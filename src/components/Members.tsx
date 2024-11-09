import React, { useState } from 'react';

// Define the shape of the data for each member
interface Member {
  name: string;
  image: string;
}

interface MembersProps {
  items: Member[];
}

const Members: React.FC<MembersProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to move to the next item
  const nextItem = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to move to the previous item
  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      {/* Left Arrow */}
      <button
        onClick={prevItem}
        disabled={currentIndex === 0}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          padding: '10px',
          fontSize: '20px',
        }}
      >
        &#8592; {/* Left Arrow Symbol */}
      </button>

      {/* Carousel Content */}
      <div style={{ textAlign: 'center' }}>
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].name}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            marginBottom: '10px',
          }}
        />
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {items[currentIndex].name}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextItem}
        disabled={currentIndex === items.length - 1}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: currentIndex === items.length - 1 ? 'not-allowed' : 'pointer',
          padding: '10px',
          fontSize: '20px',
        }}
      >
        &#8594; {/* Right Arrow Symbol */}
      </button>
    </div>
  );
};

export default Members;
