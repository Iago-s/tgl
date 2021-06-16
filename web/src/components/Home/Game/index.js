import { Title } from '../../../styles/global';
import { GamesItem, DateText } from './styles';
import colors from '../../../styles/colors';

const Game = ({ name, numbers, price, date, color }) => {
  return (
    <GamesItem color={color}>
      <Title fontSize={20} color={colors.gray_light}>
        {numbers}
      </Title>
      <DateText fontSize={20}>
        {date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear()}{' '}
        - (
        {price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
        )
      </DateText>
      <Title fontSize={20} color={color}>
        {name}
      </Title>
    </GamesItem>
  );
};

export default Game;
