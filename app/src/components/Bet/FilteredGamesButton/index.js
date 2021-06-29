import React from 'react';

import { GameButton, GameButtonText } from '../../../styles/global';

const FilteredGamesButton = ({ color, onChangeGame, type, currentGame }) => {
  return (
    <GameButton
      color={color}
      onPress={() => onChangeGame()}
      isActived={currentGame === type ? true : false}
    >
      <GameButtonText isActived={currentGame === type ? true : false}>
        {type}
      </GameButtonText>
    </GameButton>
  );
};

export default FilteredGamesButton;
