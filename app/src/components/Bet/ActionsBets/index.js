import React from 'react';
import { ScrollView } from 'react-native';

import NumberGame from '../NumberGame';

import {
  Container,
  ButtonActionsContainer,
  Button,
  TextButton,
} from './styles';
import colors from '../../../styles/colors';

const ActionsBets = ({
  numbersSelected,
  setNumbersSelected,
  currentGame,
  color,
}) => {
  const handleCompleteGame = () => {
    let ids = [];
    let random;
    let numbersRemaining = 0;

    if (numbersSelected.length >= currentGame.max_number) {
      while (ids.length < currentGame.max_number) {
        random = Math.floor(Math.random() * (currentGame.range - 1) + 1);

        if (ids.indexOf(random) === -1) {
          ids.push(random);
        }
      }
    } else {
      for (let i = 0; i < numbersSelected.length; i++) {
        ids.push(parseInt(numbersSelected[i]));
      }

      while (
        numbersRemaining <
        currentGame.max_number - numbersSelected.length
      ) {
        random = Math.floor(Math.random() * (currentGame.range - 1) + 1);

        if (ids.indexOf(random) === -1) {
          ids.push(random);
          numbersRemaining++;
        }
      }
    }

    setNumbersSelected(ids.sort((a, b) => a - b));
  };

  const handleClearGame = () => {
    setNumbersSelected([]);
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {numbersSelected.map((item) => (
          <NumberGame
            small
            close
            numbersSelected={numbersSelected}
            setNumbersSelected={setNumbersSelected}
            value={item}
            color={color}
          />
        ))}
      </ScrollView>
      <ButtonActionsContainer>
        <Button onPress={handleCompleteGame}>
          <TextButton>Complete game</TextButton>
        </Button>
        <Button small onPress={handleClearGame}>
          <TextButton>Clear game</TextButton>
        </Button>
        <Button color={colors.green_avocado}>
          <TextButton actived>Add to cart</TextButton>
        </Button>
      </ButtonActionsContainer>
    </Container>
  );
};

export default ActionsBets;
