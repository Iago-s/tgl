import React from 'react';

import { GamesList, GameContainer, GameText, GameName } from './styles';

const Game = ({ name, numbers, price, date, color }) => {
  return (
    <>
      <GameText bold>{numbers}</GameText>
      <GameText>
        {date} - (
        {price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
        )
      </GameText>
      <GameName color={color}>{name}</GameName>
    </>
  );
};

const RecentGames = ({ bets }) => {
  return (
    <GamesList>
      {bets.map((bet) => (
        <GameContainer color={bet.color}>
          <Game
            name={bet.type}
            numbers={bet.numbers}
            color={bet.color}
            price={bet.price}
            date={bet.created_at}
          />
        </GameContainer>
      ))}
    </GamesList>
  );
};

export default RecentGames;
