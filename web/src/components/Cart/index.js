import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { cartActions } from '../../store/cart';
import { savedGamesActions } from '../../store/savedGames';

import LoadingSpinner from '../UI/LoadingSpinner';
import CartItem from './Item';

import { Title, Button } from '../../styles/global';
import {
  Subtitle,
  Wrapper,
  CartContainer,
  CartIntern,
  TextHigh,
  CartItems,
} from './styles';

import colors from '../../styles/colors';

const Cart = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { games, totalPrice } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeCart({ id: itemId }));
  };

  const handleSaveGames = () => {
    if (totalPrice < props.currentGame.min_cart_value) {
      toast.error(
        totalPrice === 0
          ? 'Carrinho vazio'
          : `Valor abaixo de ${props.currentGame.min_cart_value.toLocaleString(
              'pt-br',
              {
                style: 'currency',
                currency: 'BRL',
              }
            )}. Faça mais jogos para que o total seja maior que ${props.currentGame.min_cart_value.toLocaleString(
              'pt-br',
              {
                style: 'currency',
                currency: 'BRL',
              }
            )}`
      );
      return;
    }

    games.map((item) => dispatch(savedGamesActions.addGames(item)));

    const types = props.games.map((item) => {
      return { type: item.type, color: item.color };
    });
    dispatch(savedGamesActions.addTypes(types));

    dispatch(cartActions.resetCart());

    history.push('/home');
  };

  return (
    <CartContainer>
      <CartIntern>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Title style={{ margin: 20, fontSize: 24 }}>CART</Title>
            <CartItems>
              {games.length === 0 ? (
                <Subtitle style={{ marginLeft: 20 }}>
                  Faça seu primeiro jogo
                </Subtitle>
              ) : (
                games.map((game) => (
                  <CartItem
                    key={game.id}
                    id={game.id}
                    onRemoveItem={handleRemoveItem}
                    color={game.color}
                    numbers={game.numbers}
                    name={game.name}
                    price={game.price}
                    date={game.date}
                  />
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
                onClick={handleSaveGames}
                style={{
                  width: '100%',
                  paddingTop: 30,
                  paddingBottom: 30,
                  backgroundColor: colors.gray_borders,
                }}
              >
                <Title titleIcon color={colors.green}>
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
          </>
        )}
      </CartIntern>
    </CartContainer>
  );
};

export default Cart;
