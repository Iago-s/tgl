import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../services/api';

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
  const history = useHistory();

  const [bets, setBets] = useState([]);
  const [types, setTypes] = useState([]);

  const [filteredGames, setFilteredGames] = useState([]);
  const [currentGame, setCurrentGame] = useState('');

  const handleFilterGame = async (type) => {
    const newGames = bets.filter((game) => game.type === type);
    console.log(newGames, currentGame);

    setFilteredGames(newGames);
    setCurrentGame(newGames[0]?.type);

    /*const data = { filter: type };

    try {
      const response = await api.get('/bets', JSON.stringify(data));
      setFilteredGames(response.data.data);
    } catch (err) {
      console.log({ err });
    }*/
  };

  const handleResetFilter = () => {
    setFilteredGames(bets);
    setCurrentGame('');
  };

  useEffect(() => {
    const getTypes = async () => {
      try {
        const response = await api.get('/games');

        setTypes(response.data);
      } catch (err) {
        toast.error(
          'Ocorreu um erro. O problema é conosco não se preocupe! Você será redirecionado...'
        );

        setTimeout(() => {
          history.push('/');
        }, 5000);
      }
    };

    getTypes();
  }, [history]);

  useEffect(() => {
    const getBets = async () => {
      try {
        const response = await api.get('/bets?page=2');

        setBets(response.data);
        setFilteredGames(response.data);
      } catch (err) {
        console.log('Error bets');
      }
    };

    getBets();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header showAccountButton />
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

          {bets.length > 0 && (
            <FilterContainer>
              <FilterButton fontSize={24} onClick={handleResetFilter}>
                Filters
              </FilterButton>
              {types.map((item, index) => (
                <TypeGameButton
                  key={index}
                  color={item.color}
                  onClick={() => {
                    handleFilterGame(item.type);
                  }}
                  name={item.type}
                  isActived={
                    filteredGames[0]?.type === item.type ? true : false
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

        {bets.length === 0 ? (
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
                  name={game.type}
                  price={game.price}
                  numbers={game.numbers}
                  date={new Date(game.created_at)}
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
