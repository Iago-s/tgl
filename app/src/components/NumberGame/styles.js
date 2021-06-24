import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const NumberButton = styled.TouchableOpacity`
  width: ${hp('7%')};
  height: ${hp('7%')};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${hp('0.7%')};
  margin-bottom: ${hp('0.7%')};
  border-radius: ${hp('5%')};
  background-color: ${({ isActived, color }) =>
    isActived ? color : colors.blue_light};
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: ${hp('2.5%')};
  text-align: center;
  color: ${colors.white};
`;
