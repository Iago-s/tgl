import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding-left: ${hp('2.5%')};
  padding-right: ${hp('2.5%')};

  background-color: ${colors.white};
`;
