import { Title } from '../../../styles/global';
import { GamesItem, DateText } from './styles';
import colors from '../../../styles/colors';

const Game = (props) => {
  return (
    <GamesItem color={props.color}>
      <Title fontSize={20} color={colors.gray_light}>
        {props.numbers}
      </Title>
      <DateText fontSize={20}>
        {props.date} - (
        {props.price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
        )
      </DateText>
      <Title fontSize={20} color={props.color}>
        {props.name}
      </Title>
    </GamesItem>
  );
};

export default Game;
