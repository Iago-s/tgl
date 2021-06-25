import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const NumberButton = styled.TouchableOpacity`
  width: ${({ small }) => (small ? hp('6.4%') : hp('7%'))};
  height: ${hp('7%')};
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${hp('0.7%')};
  margin-bottom: ${hp('0.7%')};
  border-radius: ${hp('7%')};
  background-color: ${({ isActived, color }) =>
    isActived ? color : colors.blue_light};
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: ${hp('2.5%')};
  text-align: center;
  color: ${colors.white};
`;

export const Close = styled.Text`
  font-weight: bold;
  font-size: ${hp('2%')};
  color: ${colors.white};

  margin-top: ${hp('-1.5%')};
`;
