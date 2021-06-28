import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import { cartActions } from '../../../store/cart';

import CartItem from './Item';

import {
  Container,
  CartContainer,
  CartInternContainer,
  CloseButtonContainer,
  CloseButton,
  BetsList,
  TotalContainer,
  SaveButton,
  SaveButtonText,
} from './styles';
import { TitleUpperCase, Text } from '../../../styles/global';
import colors from '../../../styles/colors';

const Cart = ({ setShowCart, currentGame }) => {
  const dispatch = useDispatch();
  const { games, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeCart({ id: itemId }));
  };

  const handleSaveGames = async () => {
    if (totalPrice < currentGame.min_cart_value) {
      alert('Error carrinho');
      return;
    }

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
    } catch (err) {
      alert('Error catch');
    }
  };

  return (
    <Container>
      <CartContainer>
        <CartInternContainer>
          <CloseButtonContainer>
            <CloseButton onPress={() => setShowCart(false)}>
              <Ionicons
                name="close-sharp"
                size={hp('5%')}
                color={colors.green_avocado}
              />
            </CloseButton>
          </CloseButtonContainer>
          <TitleUpperCase fontSize={hp('4%')}>
            <Ionicons
              name="cart-outline"
              size={hp('5%')}
              color={colors.green_avocado}
              style={{ marginRight: 10 }}
            />
            CART
          </TitleUpperCase>

          <BetsList>
            {games.length === 0 ? (
              <Text>Make your first game.</Text>
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
          </BetsList>

          <TotalContainer>
            <TitleUpperCase>
              CART <Text fontSize={hp('3%')}>TOTAL:</Text>
            </TitleUpperCase>
            <TitleUpperCase>{totalPrice}</TitleUpperCase>
          </TotalContainer>
        </CartInternContainer>
        <SaveButton onPress={handleSaveGames}>
          <SaveButtonText>
            Save
            <Ionicons
              name="arrow-forward-outline"
              size={hp('5%')}
              color={colors.green_avocado}
            />
          </SaveButtonText>
        </SaveButton>
      </CartContainer>
    </Container>
  );
};

export default Cart;
