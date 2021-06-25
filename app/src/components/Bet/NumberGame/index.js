import React from 'react';
import { NumberButton, TextContainer, TextButton, Close } from './styles';

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
      small={props.small}
    >
      <TextContainer>
        <TextButton>{props.value}</TextButton>
        {props.numbersSelected.includes(props.value) && props.close && (
          <Close>x</Close>
        )}
      </TextContainer>
    </NumberButton>
  );
};

export default NumberGame;
