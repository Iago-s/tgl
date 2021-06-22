import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  width: ${wp('100%')};
  padding: ${wp('1')}%;

  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: ${hp('2%')};
  color: ${colors.gray};
  text-align: center;
`;
