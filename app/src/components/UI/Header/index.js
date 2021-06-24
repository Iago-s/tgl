import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AuthContext } from '../../../contexts/AuthContext';

import Logo from '../Logo';

import { Container, IconsContainer, Button } from './styles';
import colors from '../../../styles/colors';

const Header = ({ cartIsVisible }) => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.logout();
  };

  return (
    <Container>
      <Logo fontSize={hp('5%')} width={hp('10%')} height={hp('0.8%')} />
      <IconsContainer>
        {cartIsVisible && (
          <Button>
            <Ionicons
              name="cart-outline"
              color={colors.green_avocado}
              size={hp('5%')}
            />
          </Button>
        )}
        <Button onPress={handleLogout}>
          <Ionicons
            name="exit-outline"
            color={colors.gray_forget_pass}
            size={hp('5%')}
          />
        </Button>
      </IconsContainer>
    </Container>
  );
};

export default Header;
