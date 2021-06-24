import React, { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';
import FilteredGamesButton from '../../components/FilteredGamesButton';
import NumberGame from '../../components/NumberGame';
import GameInfo from '../../components/GameInfo';

import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

import { Container } from './styles';
import {
  TitleUpperCase,
  Text,
  ButtonGamesContainer,
} from '../../styles/global';
import colors from '../../styles/colors';

const Bet = () => {
  const authContext = useContext(AuthContext);

  const [games, setGames] = useState([]);

  const [currentGame, setCurrentGame] = useState([]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  var numbers = [];
  for (let i = 0; i < currentGame.range; i++) {
    numbers.push(
      <NumberGame
        key={i + 1}
        value={i + 1}
        numbersSelected={numbersSelected}
        setNumbersSelected={setNumbersSelected}
        color={currentGame.color}
      />
    );
  }

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

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  return (
    <>
      <BarStatus backgroundColor={colors.white_ice} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Header cartIsVisible={numbersSelected.length > 0 && true} />
      <Container>
        {games.length === 0 ? (
          <Text>there is no game available</Text>
        ) : (
          <>
            <TitleUpperCase>New game for {currentGame.type}</TitleUpperCase>
            <Text>Choose a game</Text>
            <ButtonGamesContainer>
              {games.map((value, index) => (
                <FilteredGamesButton
                  key={index}
                  color={value.color}
                  onChangeGame={() => handleChangeGame(value)}
                  type={value.type}
                  currentGame={currentGame.type}
                  isActived={currentGame.type === value.type ? true : false}
                />
              ))}
            </ButtonGamesContainer>
            {numbersSelected.length === 0 ? (
              <GameInfo description={currentGame.description} />
            ) : (
              <Text>buttons</Text>
            )}

            <ScrollView
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {numbers}
            </ScrollView>
          </>
        )}
      </Container>
    </>
  );
};

export default Bet;
