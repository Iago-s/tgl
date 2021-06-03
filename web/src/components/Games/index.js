import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import NumberGame from '../NumberGame';

import { Title, ButtonGames } from '../../styles/global';
import {
  GamesContainer,
  Subtitle,
  ButtonsActionsContainer,
  ActionButton,
  AddCartButton,
  Wrapper,
  TextHigh,
} from './styles';

import DUMMY_GAMES from '../../services/games.json';

const Games = () => {
  const [currentGame, setCurrentGame] = useState(DUMMY_GAMES.types[0]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  var numbers = [];
  for (let i = 0; i < currentGame.range; i++) {
    numbers.push(
      <NumberGame
        key={i + 1}
        value={i + 1}
        numbersSelected={numbersSelected}
        setNumbersSelected={setNumbersSelected}
      />
    );
  }

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  const addInCart = () => {
    console.log(numbersSelected);
    if (
      numbersSelected.length < currentGame['max-number'] ||
      numbersSelected.length > currentGame['max-number']
    ) {
      alert('Erro');
      return;
    }

    alert('Sucesso');
    setNumbersSelected([]);
  };

  const clearGame = () => {
    setNumbersSelected([]);
  };

  return (
    <GamesContainer>
      <Title style={{ marginTop: 20, marginBottom: 20, fontSize: 24 }}>
        NEW BET <TextHigh>FOR {currentGame.type}</TextHigh>
      </Title>
      <Subtitle bold margin={10}>
        Choose a game
      </Subtitle>

      {DUMMY_GAMES.types.map((value, index) => (
        <ButtonGames
          key={index}
          color={value.color}
          onClick={() => handleChangeGame(value)}
        >
          {value.type}
        </ButtonGames>
      ))}

      <Subtitle bold margin={10}>
        Fill your bet
      </Subtitle>
      <Wrapper>
        <Subtitle margin={10}>{currentGame.description}</Subtitle>
        {numbers}
      </Wrapper>

      <ButtonsActionsContainer>
        <Wrapper>
          <ActionButton>Complete game</ActionButton>
          <ActionButton onClick={clearGame}>Clear game</ActionButton>
        </Wrapper>
        <AddCartButton onClick={addInCart}>
          <FaShoppingCart size={24} style={{ marginRight: 10 }} />
          Add to card
        </AddCartButton>
      </ButtonsActionsContainer>
    </GamesContainer>
  );
};

export default Games;
