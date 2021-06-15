import { FaShoppingCart } from 'react-icons/fa';

import NumberGame from './NumberGame';
import TypeGameButton from './TypeGameButton';

import { Title } from '../../styles/global';
import {
  GamesContainer,
  Subtitle,
  ButtonsActionsContainer,
  ActionButton,
  AddCartButton,
  Wrapper,
  TextHigh,
} from './styles';

const Games = (props) => {
  var numbers = [];
  for (let i = 0; i < props.currentGame.range; i++) {
    numbers.push(
      <NumberGame
        key={i + 1}
        value={i + 1}
        numbersSelected={props.numbersSelected}
        setNumbersSelected={props.setNumbersSelected}
      />
    );
  }

  return (
    <GamesContainer>
      <Title style={{ marginTop: 20, marginBottom: 20, fontSize: 24 }}>
        NEW BET <TextHigh>FOR {props.currentGame.type}</TextHigh>
      </Title>
      <Subtitle bold margin={10}>
        Choose a game
      </Subtitle>

      {props.games.map((value, index) => (
        <TypeGameButton
          key={index}
          color={value.color}
          onClick={() => props.onChangeGame(value)}
          name={value.type}
          currentGame={props.currentGame.type}
        />
      ))}

      <Subtitle bold margin={10}>
        Fill your bet
      </Subtitle>
      <Wrapper>
        <Subtitle margin={10}>{props.currentGame.description}</Subtitle>
        {numbers}
      </Wrapper>

      <ButtonsActionsContainer>
        <Wrapper>
          <ActionButton onClick={props.onCompleteGame}>
            Complete game
          </ActionButton>
          <ActionButton onClick={props.onClearGame}>Clear game</ActionButton>
        </Wrapper>
        <AddCartButton onClick={() => props.onAddCart()}>
          <FaShoppingCart size={24} style={{ marginRight: 10 }} />
          Add to card
        </AddCartButton>
      </ButtonsActionsContainer>
    </GamesContainer>
  );
};

export default Games;
