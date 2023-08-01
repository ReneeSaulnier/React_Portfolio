import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const TextLetters = ({ text, position, mouseEnter, mouseLeave, hoveredLetter }) => {
  const textRef = useRef();
  const { size } = useThree();

  const fontSize = size.width * 0.0003;

  useFrame(({ raycaster }) => {
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
      fontSize={fontSize}
      size={fontSize * 0.1}
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

  const name = [
    'H', 'i', ',', ' ', 'I', "'", 'm', ' ', 'R', 'e', 'n', 'e', 'e', '!'
  ];

  const description = [
    'I', "'", 'm', ' ',
    'a', ' ', 'J', 'u', 'n', 'i', 'o', 'r', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v',
    'e', 'l', 'o', 'p', 'e', 'r', '.'
  ];

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <group>
          {name.map((letter, index) => (
            <TextLetters
              key={index}
              text={letter}
              position={[-(name.length - index) * 0.3, 1, -1]}
              mouseEnter={handleMouseEnter}
              mouseLeave={handleMouseLeave}
              hoveredLetter={hoveredLetter}
            />
          ))}
          {description.map((letter, index) => (
            <TextLetters
              key={index}
              text={letter}
              position={[-(description.length - 17.6 - index) * 0.31, 0, -1]}
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
