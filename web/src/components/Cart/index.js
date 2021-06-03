import { FaArrowRight } from 'react-icons/fa';

import { Title, Button } from '../../styles/global';
import {
  Subtitle,
  Wrapper,
  CartContainer,
  CartIntern,
  TextHigh,
} from './styles';

import colors from '../../styles/colors';

const Cart = () => {
  return (
    <CartContainer>
      <CartIntern>
        <Title style={{ margin: 20, fontSize: 24 }}>CART</Title>
        <Subtitle style={{ marginLeft: 20 }}>Faça seu primeiro jogo</Subtitle>

        <Wrapper>
          <Title style={{ margin: 20, fontSize: 24 }}>
            CART{' '}
            <TextHigh>
              TOTAL <span data-js="games-value" />
              0,00
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
