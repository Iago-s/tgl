import { SafeAreaView } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from '../../../styles/colors';

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;

  padding-left: ${wp('25%')};
  position: absolute;

  background-color: transparent;
`;

export const CartContainer = styled.View`
  height: 100%;
  background-color: ${colors.white_ice};
`;

export const CartInternContainer = styled.View`
  flex: 1;
  padding-left: ${wp('4%')};
  padding-right: ${wp('4%')};

  background-color: ${colors.white_ice};
`;

export const CloseButtonContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity``;

export const BetsList = styled.ScrollView`
  flex: 1;
`;

export const TotalContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${hp('2%')};
  padding-bottom: ${hp('2%')};
`;

export const SaveButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: ${hp('2%')};
  padding-bottom: ${hp('4%')};

  background-color: ${colors.gray_borders};
`;

export const SaveButtonText = styled.Text`
  font-size: ${hp('5%')};
  font-weight: bold;
  color: ${colors.green_avocado};
`;
