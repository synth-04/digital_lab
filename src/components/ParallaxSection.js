// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
  return (
    <Parallax bgImage="/images/immaginecomputer.webp" strength={500}
    style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
      <div style={{ height: 400 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          color: 'white',
          textShadow: '0 0 5px black',
        }}>
            <h1>Benvenuto nel Digital Lab</h1>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
