import React, { useState, useEffect, useContext } from 'react';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';

import MakeBets from '../../components/Bet/MakeBets';

import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

import { Container } from './styles';

import colors from '../../styles/colors';

const Bet = () => {
  const authContext = useContext(AuthContext);

  const [games, setGames] = useState([]);

  const [currentGame, setCurrentGame] = useState([]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await api.get('/games');

        setGames(response.data);
        setCurrentGame(response.data.length !== 0 ? response.data[0] : []);
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

    getGames();
  }, []);

  return (
    <>
      <BarStatus backgroundColor={colors.white_ice} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <>
        <Header cartIsVisible={numbersSelected.length > 0 && true} />
        <Container>
          <MakeBets
            games={games}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}
            numbersSelected={numbersSelected}
            setNumbersSelected={setNumbersSelected}
          />
        </Container>
      </>
    </>
  );
};

export default Bet;
