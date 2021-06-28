import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import api from '../../../services/api';
import { cartActions } from '../../../store/cart';

import Loading from '../../UI/Loading';
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

const Cart = ({ setShowCart, currentGame, setNumbersSelected, navigation }) => {
  const dispatch = useDispatch();
  const { games, totalPrice } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);

  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeCart({ id: itemId }));
  };

  const handleSaveGames = async () => {
    setLoading(true);

    if (totalPrice < currentGame.min_cart_value) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Your cart must have a value equal to or greater than ${currentGame.min_cart_value}.`,
      });

      setLoading(false);
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

      setLoading(false);
      setShowCart(false);
      setNumbersSelected([]);
      dispatch(cartActions.resetCart());

      navigation.navigate('Home');
    } catch (err) {
      setLoading(false);
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
                  price={new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(game.price)}
                  date={game.date}
                />
              ))
            )}
          </BetsList>

          <TotalContainer>
            <TitleUpperCase>
              CART <Text fontSize={hp('3%')}>TOTAL:</Text>
            </TitleUpperCase>
            <TitleUpperCase>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalPrice)}
            </TitleUpperCase>
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
        {loading && <Loading />}
      </CartContainer>
    </Container>
  );
};

export default Cart;
