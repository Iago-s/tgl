import React from 'react';
import { StatusBar } from 'react-native';

const BarStatus = ({ backgroundColor }) => {
  return (
    <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
  );
};

export default BarStatus;
