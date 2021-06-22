import { Platform, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;
