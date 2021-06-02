import { FaShoppingCart, FaArrowRight, FaTrashAlt } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Title, Button, ButtonGames } from '../../styles/global';
import {
  GamesContainer,
  Subtitle,
  ButtonsActionsContainer,
  ActionButton,
  AddCartButton,
  Wrapper,
  CartContainer,
  Cart,
  TextHigh,
} from './styles';
import colors from '../../styles/colors';

const Bets = () => {
  return (
    <>
      <Header showHomeButton />
      <Container middle>
        <GamesContainer>
          <Title style={{ marginTop: 20, marginBottom: 20, fontSize: 24 }}>
            NEW BET <TextHigh>FOR MEGA-SENA</TextHigh>
          </Title>
          <Subtitle bold margin={10}>
            Choose a game
          </Subtitle>

          <ButtonGames>Lotofacil</ButtonGames>
          <ButtonGames>Mega-Sena</ButtonGames>
          <ButtonGames>Lotomania</ButtonGames>

          <Subtitle bold margin={10}>
            Fill your bet
          </Subtitle>
          <Wrapper>
            <Subtitle margin={10}>
              Descricao Descricao Descricao Descricao Descricao
            </Subtitle>
            <div data-js="game-numbers" class="game-numbers"></div>
          </Wrapper>

          <ButtonsActionsContainer>
            <Wrapper>
              <ActionButton>Complete game</ActionButton>
              <ActionButton>Clear game</ActionButton>
            </Wrapper>
            <AddCartButton>
              <FaShoppingCart size={24} style={{ marginRight: 10 }} />
              Add to card
            </AddCartButton>
          </ButtonsActionsContainer>
        </GamesContainer>

        <CartContainer>
          <Cart class="cart">
            <Title style={{ margin: 20, fontSize: 24 }}>CART</Title>
            <Subtitle style={{ marginLeft: 20 }}>
              Faça seu primeiro jogo
            </Subtitle>

            <Wrapper>
              <Title style={{ margin: 20, fontSize: 24 }} class="title">
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
          </Cart>
        </CartContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Bets;
