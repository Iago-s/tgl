import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Game from '../../components/Home/Game';
import TypeGameButton from '../../components/Bets/TypeGameButton';

import { Container, Title, Button, FeedbackMessage } from '../../styles/global';
import {
  NavContainer,
  FilterContainer,
  FilterButton,
  GamesList,
} from './styles';
import colors from '../../styles/colors';

const Home = () => {
  const { games, types } = useSelector((state) => state.games);
  const history = useHistory();

  const [filteredGames, setFilteredGames] = useState(games);
  const [currentGame, setCurrentGame] = useState('');

  const handleFilterGame = (type) => {
    const newGames = games.filter((game) => game.name === type);
    setFilteredGames(newGames);
    setCurrentGame(newGames[0].name);
  };

  const handleResetFilter = () => {
    setFilteredGames(games);
    setCurrentGame('');
  };

  return (
    <>
      <Header />
      <Container
        column
        middle
        paddingTopAndBottom={30}
        paddingLeftAndRight={130}
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
                <TypeGameButton
                  key={index}
                  color={type.color}
                  onClick={() => {
                    handleFilterGame(type.type);
                  }}
                  name={type.type}
                  isActived={
                    filteredGames[0]?.name === type.type ? true : false
                  }
                  currentGame={currentGame}
                />
              ))}
            </FilterContainer>
          )}

          <Button onClick={() => history.push('/bets')}>
            <Title fontSize={24} color={colors.green_avocado} titleIcon>
              New Bet
              <FaArrowRight size={24} style={{ marginLeft: 10 }} />
            </Title>
          </Button>
        </NavContainer>

        {games.length === 0 ? (
          <FeedbackMessage>Faça seu primeiro jogo!</FeedbackMessage>
        ) : (
          <GamesList>
            {filteredGames.length === 0 ? (
              <FeedbackMessage>
                Você ainda não fez nenhum jogo desse tipo!
              </FeedbackMessage>
            ) : (
              filteredGames.map((game) => (
                <Game
                  key={game.id}
                  color={game.color}
                  name={game.name}
                  price={game.price}
                  numbers={game.numbers}
                  date={game.date}
                />
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
