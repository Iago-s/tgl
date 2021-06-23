import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  z-index: 9999;
  position: relative;

  background-color: ${colors.white};
`;
