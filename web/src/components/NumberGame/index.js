import { NumberButton } from './styles';

const NumberGame = (props) => {
  const addNumber = (number) => {
    if (!props.numbersSelected.includes(number)) {
      props.setNumbersSelected((oldNumbersSelected) => {
        return [...oldNumbersSelected, number];
      });
    } else {
      const filter = props.numbersSelected.filter(
        (number) => number !== number
      );

      props.setNumbersSelected(() => filter);
    }
  };

  return (
    <NumberButton
      clearAll={props.isActived}
      onClick={() => addNumber(props.value)}
    >
      {props.value}
    </NumberButton>
  );
};

export default NumberGame;
