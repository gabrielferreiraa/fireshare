import React from 'react';
import { Particles as ReactParticles } from 'react-particles-js';
import styled from 'styled-components';
import global from 'tools/global';

const StyledParticles = styled(ReactParticles)`
  canvas {
    position: absolute;
    z-index: 0;
    background: linear-gradient(${global.colors.secondary}, #333333);
  }
`;

const params = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const Particles = () => <StyledParticles params={params} />;

export default Particles;
