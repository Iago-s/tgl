import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';
import colors from '../../../styles/colors';

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size={150} color={colors.green_avocado} />
    </Container>
  );
};

export default Loading;
