import { FaTrashAlt } from 'react-icons/fa';

import {
  CartItem,
  TrashButton,
  GameInfosContainer,
  Text,
  TextGameName,
} from './styles';

const Item = (props) => {
  return (
    <CartItem>
      <TrashButton onClick={() => props.onRemoveItem(props.id)}>
        <FaTrashAlt size={24} />
      </TrashButton>
      <GameInfosContainer color={props.color}>
        <Text>{props.numbers}</Text>
        <Text>
          <TextGameName>{props.name}</TextGameName>{' '}
          {props.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
        <Text>{props.date}</Text>
      </GameInfosContainer>
    </CartItem>
  );
};

export default Item;
