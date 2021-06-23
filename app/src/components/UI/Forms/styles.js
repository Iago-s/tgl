import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Form = styled.View`
  width: ${wp('80%')};

  padding-top: ${hp('2%')};
  padding-bottom: ${hp('2%')};

  border-color: ${colors.gray_borders};
  border-width: 1px;
  border-radius: ${hp('2%')};
  background-color: ${colors.white_ice};
`;

export const ForgotPassword = styled.Text`
  font-size: ${hp('1.8%')};
  font-style: italic;
  color: ${colors.gray_forget_pass};
  text-align: right;

  margin-right: ${hp('3%')};
  margin-bottom: ${hp('2%')};
`;
