import React from 'react';
import { NumberButton, TextButton } from './styles';

const NumberGame = (props) => {
  const addNumber = (numberSelected) => {
    if (!props.numbersSelected.includes(numberSelected)) {
      props.setNumbersSelected((oldNumbersSelected) => {
        return [...oldNumbersSelected, numberSelected];
      });
    } else {
      const filter = props.numbersSelected.filter(
        (number) => number !== numberSelected
      );

      props.setNumbersSelected(() => filter);
    }
  };

  return (
    <NumberButton
      onPress={() => addNumber(props.value)}
      isActived={props.numbersSelected.includes(props.value)}
      color={props.color}
    >
      <TextButton>{props.value}</TextButton>
    </NumberButton>
  );
};

export default NumberGame;
