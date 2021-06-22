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
  text-align: center;

  margin-top: ${hp('4%')};
  margin-bottom: ${hp('4%')};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
`;

export const TextButton = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${hp('4%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.green_avocado};
  text-align: center;
`;
