// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const ParallaxSection = ({ bgImage, title }) => {
  return (
    <Parallax bgImage={bgImage} strength={500}
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
            <h1>{title}</h1>
        </div>
      </div>
    </Parallax>
  );
};

ParallaxSection.propTypes = {
    bgImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // Prop validation per assicurare che venga passato un bgImage
  };

export default ParallaxSection;
