import { SafeAreaView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

export const Container = styled(SafeAreaView)`
  width: 100%;
  display: flex;

  padding-left: ${wp('3%')};
  padding-right: ${wp('2%')};
  border-left-width: ${hp('1%')};
  border-radius: ${hp('1%')};
  border-left-color: ${({ color }) => (color ? color : colors.green)};

  margin-bottom: ${hp('2%')};
`;

export const BetContainer = styled.View`
  display: flex;
`;

export const Numbers = styled.Text`
  font-size: ${hp('2.5%')};
  font-style: italic;
  font-weight: bold;
  color: ${colors.gray_light};

  margin-bottom: ${hp('1%')};
`;

export const PriceContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfosText = styled.Text`
  font-size: ${hp('2%')};
  font-style: italic;
  color: ${colors.gray_light};

  margin-bottom: ${hp('1%')};
`;

export const RemoveButton = styled.TouchableOpacity``;

export const Name = styled.Text`
  font-size: ${hp('3%')};
  font-style: italic;
  font-weight: bold;
  color: ${({ color }) => (color ? color : colors.green)};

  margin-bottom: ${hp('1%')};
`;
