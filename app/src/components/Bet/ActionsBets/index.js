import React from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import { cartActions } from '../../../store/cart';

import NumberGame from '../NumberGame';

import {
  Container,
  ButtonActionsContainer,
  Button,
  TextButton,
} from './styles';
import colors from '../../../styles/colors';

const ActionsBets = ({ numbersSelected, setNumbersSelected, currentGame }) => {
  const dispatch = useDispatch();

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

  const handleAddCart = () => {
    if (
      numbersSelected.length < currentGame.max_number ||
      numbersSelected.length > currentGame.max_number
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `For this bet you must choose ${currentGame.max_number} numbers!`,
        position: 'bottom',
      });

      return;
    }

    let date = new Date();
    let formatDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    dispatch(
      cartActions.addCart({
        game: {
          id: new Date().getTime().toString(),
          name: currentGame.type,
          numbers: numbersSelected.sort((a, b) => a - b).join(','),
          price: currentGame.price,
          color: currentGame.color,
          date: formatDate,
        },
      })
    );

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
            color={currentGame.color}
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
        <Button color={colors.green_avocado} onPress={handleAddCart}>
          <TextButton actived>Add to cart</TextButton>
        </Button>
      </ButtonActionsContainer>
    </Container>
  );
};

export default ActionsBets;
