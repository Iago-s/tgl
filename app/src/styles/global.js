import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from './colors';

export const Title = styled.Text`
  font-size: ${hp('4%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
  text-transform: uppercase;
  text-align: center;

  margin-top: ${hp('4%')};
  margin-bottom: ${hp('4%')};
`;
