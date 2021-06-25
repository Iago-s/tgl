import React from 'react';

import { Container, Title, Description } from './styles';

const GameInfo = ({ description }) => {
  return (
    <Container>
      <Title>Fill your bet</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default GameInfo;
