import React, { useEffect } from 'react';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';

import { Container } from './styles';
import colors from '../../styles/colors';

const Bet = () => {
  return (
    <>
      <BarStatus backgroundColor={colors.white_ice} />
      <Header />
      <Container></Container>
    </>
  );
};

export default Bet;
