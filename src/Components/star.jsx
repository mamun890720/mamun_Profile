import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledStar = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  z-index: -1;
`;

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 1000; i++) {
        newStars.push({
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {stars.map((star, index) => (
        <StyledStar
          key={index}
          style={{ top: star.top, left: star.left, width: '.1px', height: '.1px' }}
        />
      ))}
    </div>
  );
};

export default StarField;
