import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';
import Loading from '../../components/UI/Loading';
import RecentGames from '../../components/Home/RecentGames';
import FilteredGamesButton from '../../components/Bet/FilteredGamesButton';

import { AuthContext } from '../../contexts/AuthContext';
import { cartActions } from '../../store/cart';
import api from '../../services/api';

import { Container } from './styles';
import {
  TitleUpperCase,
  Text,
  ButtonGamesContainer,
} from '../../styles/global';
import colors from '../../styles/colors';

const Home = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state) => state.cart);

  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

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
    getBets();
  }, [games]);

  const getBets = useCallback(async () => {
    setLoading(true);

    try {
      const response = await api.get('/bets');

      setBets(response.data);
      setFilteredGames(response.data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error has occurred. The problem is with us, do not worry!',
      });

      dispatch(cartActions.resetCart());
      setTimeout(() => {
        authContext.logout();
      }, 5000);
    }
  });

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
        {loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
