import { NumberButton } from './styles';

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
    <NumberButton onClick={() => addNumber(props.value)}>
      {props.value}
    </NumberButton>
  );
};

export default NumberGame;
