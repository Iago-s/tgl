import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const GamesList = styled.ScrollView`
  flex: 1;
`;

export const GameContainer = styled.View`
  border-left-width: ${wp('1.5%')};
  border-left-color: ${({ color }) => (color ? color : colors.green)};
  border-radius: 5px;

  padding-left: ${hp('2%')};
  margin-top: ${hp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const GameText = styled.Text`
  font-size: ${hp('2.5%')};
  font-style: italic;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${colors.gray_light};

  margin-bottom: ${hp('1%')};
`;

export const GameName = styled.Text`
  font-size: ${hp('3%')};
  font-style: italic;
  font-weight: bold;
  color: ${({ color }) => (color ? color : colors.gray)};
`;
