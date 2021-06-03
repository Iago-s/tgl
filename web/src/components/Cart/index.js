import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa';

import { cartActions } from '../../store/cart';

import { Title, Button } from '../../styles/global';
import {
  Subtitle,
  Wrapper,
  CartContainer,
  CartIntern,
  TextHigh,
  CartItems,
  CartItem,
  TrashButton,
  GameInfosContainer,
  Text,
  TextGameName,
} from './styles';

import colors from '../../styles/colors';

const Cart = () => {
  const dispatch = useDispatch();
  const { games, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeCart({ id: itemId }));
  };

  return (
    <CartContainer>
      <CartIntern>
        <Title style={{ margin: 20, fontSize: 24 }}>CART</Title>
        <CartItems>
          {games.length === 0 ? (
            <Subtitle style={{ marginLeft: 20 }}>
              Faça seu primeiro jogo
            </Subtitle>
          ) : (
            games.map((game) => (
              <CartItem key={game.id}>
                <TrashButton onClick={() => handleRemoveItem(game.id)}>
                  <FaTrashAlt size={24} />
                </TrashButton>
                <GameInfosContainer color={game.color}>
                  <Text>{game.numbers}</Text>
                  <Text>
                    <TextGameName>{game.name}</TextGameName>{' '}
                    {game.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                  <Text>{game.date}</Text>
                </GameInfosContainer>
              </CartItem>
            ))
          )}
        </CartItems>

        <Wrapper>
          <Title style={{ margin: 20, fontSize: 24 }}>
            CART{' '}
            <TextHigh>
              TOTAL <span data-js="games-value" />
              {totalPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TextHigh>
          </Title>
          <Button
            style={{
              width: '100%',
              paddingTop: 30,
              paddingBottom: 30,
              backgroundColor: colors.gray_borders,
            }}
          >
            <Title
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.green,
              }}
            >
              Save
              <FaArrowRight
                size={35}
                style={{
                  marginLeft: 15,
                }}
              />
            </Title>
          </Button>
        </Wrapper>
      </CartIntern>
    </CartContainer>
  );
};

export default Cart;
