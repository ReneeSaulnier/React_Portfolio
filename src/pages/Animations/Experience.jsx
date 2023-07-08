import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const TextLetters = ({ text, position, mouseEnter, mouseLeave, hoveredLetter }) => {
  const textRef = useRef();

  useFrame(({ raycaster }) => {
    raycaster.setFromCamera(mouseEnter, textRef.current.parent);
    const intersects = raycaster.intersectObject(textRef.current);
    const isIntersecting = intersects.length > 0;

    if (isIntersecting && text === hoveredLetter) {
      textRef.current.material.color.set(0xffcc00); 
    } else {
      textRef.current.material.color.set(0xffffff); 
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwIYqWqZPBQ.ttf"
      onPointerEnter={() => mouseEnter(text)}
      onPointerLeave={() => mouseLeave()}
    >
      {text}
    </Text>
  );
};

const Experience = () => {
  const [hoveredLetter, setHoveredLetter] = useState('');

  const handleMouseEnter = (letter) => {
    setHoveredLetter(letter);
  };

  const handleMouseLeave = () => {
    setHoveredLetter('');
  };

  const handleMouseMove = (event) => {
    // handle mouse movement
  };

  const letters = [
    'H', 'i', ',', ' ', 'I', "'", 'm', ' ', 'R', 'e', 'n', 'e', 'e', '!', '\n', 'I', "'", 'm', ' ',
    'a', ' ', 'J', 'u', 'n', 'i', 'o', 'r', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v',
    'e', 'l', 'o', 'p', 'e', 'r', '.'
  ];

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        onMouseMove={handleMouseMove}
      >
        <group>
          {letters.map((letter, index) => (
            <TextLetters
              key={index}
              text={letter}
              position={[-(letters.length -38 - index) * 0.3, 1, 0]}
              mouseEnter={handleMouseEnter}
              mouseLeave={handleMouseLeave}
              hoveredLetter={hoveredLetter}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
};

export default Experience;
