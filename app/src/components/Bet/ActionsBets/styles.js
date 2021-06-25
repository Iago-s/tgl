import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View``;

export const ButtonActionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${hp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const Button = styled.TouchableOpacity`
  width: ${({ small }) => (small ? '29' : '32')}%;
  border-width: 1px;
  border-color: ${colors.green_avocado};

  background-color: ${({ color }) => (color ? color : colors.white_ice)};
`;

export const TextButton = styled.Text`
  font-size: ${hp('1.8%')};
  font-weight: bold;
  color: ${({ actived }) => (actived ? colors.white : colors.green_avocado)};
  text-align: center;
`;
