import React, { useState } from 'react';

function ImageCard({ imageUrl, link1, link2 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      <img
        src={imageUrl}
        style={{
          width: '100%',
          filter: isHovered ? 'blur(5px)' : 'none'
        }}
      />
      {isHovered && (
        <div style={{ position: 'absolute', bottom: 0, right: 0, padding: 10 }}>
          <a href={link1}>
            <button>Button 1</button>
          </a>
          <a href={link2}>
            <button>Button 2</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default ImageCard;

