import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: ${hp('2.5%')};
  padding-right: ${hp('2.5%')};
  padding-top: ${hp('1%')};
  padding-bottom: ${hp('1.5%')};

  background-color: ${colors.white_ice};
`;

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  padding-left: ${hp('2%')};
`;
