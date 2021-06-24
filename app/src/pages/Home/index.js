import React, { useEffect, useState, useContext } from 'react';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';
import RecentGames from '../../components/RecentGames';
import FilteredGamesButton from '../../components/FilteredGamesButton';

import { AuthContext } from '../../contexts/AuthContext';
import api from '../../services/api';

import { Container } from './styles';
import {
  TitleUpperCase,
  Text,
  ButtonGamesContainer,
} from '../../styles/global';
import colors from '../../styles/colors';

const Home = () => {
  const authContext = useContext(AuthContext);

  const [bets, setBets] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [currentGame, setCurrentGame] = useState('');

  useEffect(() => {
    const getTypes = async () => {
      try {
        const response = await api.get('/games');

        setTypes(response.data);
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error has occurred. The problem is with us, do not worry!',
        });

        setTimeout(() => {
          authContext.logout();
        }, 5000);
      }
    };

    getTypes();
  }, []);

  useEffect(() => {
    const getBets = async () => {
      try {
        const response = await api.get('/bets');

        setBets(response.data);
        setFilteredGames(response.data);
      } catch (err) {
        console.log('Error bets');
      }
    };

    getBets();
  }, []);

  const handleFilterGame = async (type) => {
    const newGames = bets.filter((game) => game.type === type);

    setFilteredGames(newGames);
    setCurrentGame(newGames[0]?.type);
  };

  const handleResetFilter = () => {
    setFilteredGames(bets);
    setCurrentGame('');
  };

  return (
    <>
      <BarStatus backgroundColor={colors.white_ice} />
      <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 999 }} />
      <Header />
      <Container>
        <TitleUpperCase>Recent games</TitleUpperCase>

        {bets.length > 0 && (
          <>
            <Text onPress={handleResetFilter}>Filters</Text>
            <ButtonGamesContainer>
              {types.map((item, index) => (
                <FilteredGamesButton
                  key={item.id}
                  color={item.color}
                  type={item.type}
                  onChangeGame={() => {
                    handleFilterGame(item.type);
                  }}
                  isActived={
                    filteredGames[0]?.type === item.type ? true : false
                  }
                  currentGame={currentGame}
                />
              ))}
            </ButtonGamesContainer>
          </>
        )}

        {bets.length === 0 ? (
          <Text>Make your first game.</Text>
        ) : filteredGames.length === 0 ? (
          <Text>You haven't made any bets of this type yet</Text>
        ) : (
          <RecentGames bets={filteredGames} />
        )}
      </Container>
    </>
  );
};

export default Home;
