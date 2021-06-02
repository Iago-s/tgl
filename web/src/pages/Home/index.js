import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Title, Button, ButtonGames } from '../../styles/global';
import {
  NavContainer,
  FilterContainer,
  FilterButton,
  GamesList,
  GamesItem,
  DateText,
} from './styles';
import colors from '../../styles/colors';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container
        column
        middle={true}
        style={{
          paddingTop: 60,
          paddingLeft: 130,
          paddingRight: 130,
        }}
      >
        <NavContainer>
          <Title uppercase fontSize={24}>
            Recent Games
          </Title>

          {true && (
            <FilterContainer>
              <FilterButton fontSize={24}>Filters</FilterButton>
              <ButtonGames color={colors.green}>Lotofacil</ButtonGames>
              <ButtonGames color={colors.green_avocado}>Mega-Sena</ButtonGames>
              <ButtonGames color={colors.blue_light}>Lotomania</ButtonGames>
            </FilterContainer>
          )}

          <Button onClick={() => history.push('/bets')}>
            <Title
              fontSize={24}
              color={colors.green_avocado}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              New Bet
              <FaArrowRight size={24} style={{ marginLeft: 10 }} />
            </Title>
          </Button>
        </NavContainer>

        <GamesList>
          <GamesItem color={colors.green}>
            <Title fontSize={20} color={colors.gray_light}>
              01, 02, 03, 04, 05, 06, 07, 08 09, 10, 11, 12, 13, 14, 15
            </Title>
            <DateText fontSize={20}>30/11/2021 - R$(2,50)</DateText>
            <Title fontSize={20} color={colors.green}>
              Lotofacil
            </Title>
          </GamesItem>
        </GamesList>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
