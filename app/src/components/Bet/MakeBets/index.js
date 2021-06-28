import React from 'react';
import { ScrollView } from 'react-native';

import FilteredGamesButton from '../../FilteredGamesButton';

import GameInfo from '../GameInfo';
import NumberGame from '../NumberGame';
import ActionsBets from '../ActionsBets';

import {
  TitleUpperCase,
  Text,
  ButtonGamesContainer,
} from '../../../styles/global';

const MakeBets = ({
  games,
  currentGame,
  setCurrentGame,
  numbersSelected,
  setNumbersSelected,
}) => {
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

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  return (
    <>
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
            <ActionsBets
              numbersSelected={numbersSelected}
              setNumbersSelected={setNumbersSelected}
              currentGame={currentGame}
            />
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
    </>
  );
};

export default MakeBets;
