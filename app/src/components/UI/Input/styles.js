import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Label = styled.Text`
  font-size: ${hp('2%')};
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray_inputs};
  margin-left: ${hp('3%')};
`;

export const Field = styled.TextInput`
  font-size: ${hp('2%')};
  font-style: italic;
  color: ${colors.gray_inputs};

  padding-top: ${hp('1%')};
  padding-bottom: ${hp('1%')};
  padding-left: ${hp('3%')};
  padding-right: ${hp('3%')};
  margin-bottom: ${hp('2%')};

  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: ${colors.gray_borders};
  border-bottom-color: ${({ hasError }) =>
    !hasError ? colors.gray_borders : colors.red};
`;
