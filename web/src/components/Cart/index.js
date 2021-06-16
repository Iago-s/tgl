import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../services/api';

import { cartActions } from '../../store/cart';

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

  const handleSaveGames = async () => {
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

    setLoading(true);

    const bets = games.map((item) => {
      return {
        type: item.name,
        numbers: item.numbers,
        price: item.price,
        color: item.color,
      };
    });

    const data = { bets };

    try {
      await api.post('/bets', JSON.stringify(data));

      dispatch(cartActions.resetCart());
      setLoading(true);

      history.push('/home');
    } catch (err) {
      setLoading(true);

      toast.error(
        'Ocorreu um erro. O problema é conosco não se preocupe! Você será redirecionado...'
      );

      setTimeout(() => {
        history.push('/');
      }, 5000);
    }
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
