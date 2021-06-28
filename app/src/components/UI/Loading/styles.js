import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  position: absolute;

  background-color: ${colors.white};
`;
