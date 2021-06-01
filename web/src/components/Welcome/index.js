import { Title } from '../../styles/global';
import { For } from './styles';

const Welcome = () => {
  return (
    <>
      <Title fontSize={65}>The</Title>
      <Title fontSize={65}>Greatest</Title>
      <Title fontSize={65}>App</Title>
      <For>for</For>
      <Title fontSize={83} uppercase>
        Lottery
      </Title>
    </>
  );
};

export default Welcome;
