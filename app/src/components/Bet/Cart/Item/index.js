import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  BetContainer,
  Numbers,
  PriceContainer,
  InfosText,
  RemoveButton,
  Name,
} from './styles';
import colors from '../../../../styles/colors';

const CartItem = ({ id, onRemoveItem, color, numbers, name, price, date }) => (
  <Container color={color}>
    <BetContainer>
      <Numbers>{numbers}</Numbers>
      <PriceContainer>
        <InfosText>
          {date} ({price})
        </InfosText>
        <RemoveButton onPress={() => onRemoveItem(id)}>
          <Ionicons name="trash-outline" size={hp('3%')} color={colors.gray} />
        </RemoveButton>
      </PriceContainer>
      <Name color={color}>{name}</Name>
    </BetContainer>
  </Container>
);

export default CartItem;
