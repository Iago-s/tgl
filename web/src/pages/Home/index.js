import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GameButton from '../../components/GameButton';

import { Container, Title, Button, FeedbackMessage } from '../../styles/global';
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
  const { games, types } = useSelector((state) => state.games);
  const history = useHistory();

  const [filteredGames, setFilteredGames] = useState(games);

  const handleFilterGame = (type) => {
    const newGames = games.filter((game) => game.name === type);
    setFilteredGames(newGames);
  };

  const handleResetFilter = () => {
    setFilteredGames(games);
  };

  return (
    <>
      <Header />
      <Container
        column
        middle={true}
        style={{
          paddingTop: 30,
          paddingLeft: 130,
          paddingRight: 130,
          paddingBottom: 30,
        }}
      >
        <NavContainer>
          <Title uppercase fontSize={24}>
            Recent Games
          </Title>

          {games.length > 0 && (
            <FilterContainer>
              <FilterButton fontSize={24} onClick={handleResetFilter}>
                Filters
              </FilterButton>
              {types.map((type, index) => (
                <GameButton
                  key={index}
                  color={type.color}
                  onClick={() => {
                    handleFilterGame(type.type);
                  }}
                  name={type.type}
                />
              ))}
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

        {games.length === 0 ? (
          <FeedbackMessage>Faça um jogo</FeedbackMessage>
        ) : (
          <GamesList>
            {filteredGames.length === 0 ? (
              <FeedbackMessage>
                Você ainda não fez nenhum jogo desse tipo!
              </FeedbackMessage>
            ) : (
              filteredGames.map((game) => (
                <GamesItem color={game.color} key={game.id}>
                  <Title fontSize={20} color={colors.gray_light}>
                    {game.numbers}
                  </Title>
                  <DateText fontSize={20}>
                    {game.date} - (
                    {game.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                    )
                  </DateText>
                  <Title fontSize={20} color={colors.green}>
                    {game.name}
                  </Title>
                </GamesItem>
              ))
            )}
          </GamesList>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Home;
