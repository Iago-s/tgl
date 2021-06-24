import React from 'react';

import { Container, TglText, Line } from './styles';

const Logo = ({ fontSize, width, height }) => {
  return (
    <Container>
      <TglText fontSize={fontSize}>TGL</TglText>
      <Line width={width} height={height} />
    </Container>
  );
};

export default Logo;
