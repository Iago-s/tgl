import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View``;

export const TglText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : hp('8%'))};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
  text-transform: uppercase;
  text-align: center;
`;

export const Line = styled.View`
  width: ${({ width }) => (width ? width : hp('18%'))};
  height: ${({ height }) => (height ? height : hp('1%'))};

  margin: auto;

  background-color: ${colors.green_avocado};
  border-radius: 5;
`;
