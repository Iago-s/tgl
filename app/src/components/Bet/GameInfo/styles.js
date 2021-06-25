import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  margin-bottom: ${hp('2%')};
`;

export const Title = styled.Text`
  font-size: ${hp('2.5%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
`;

export const Description = styled.Text`
  font-size: ${hp('2%')};
  font-style: italic;
  color: ${colors.gray};
`;
