import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import colors from './colors';

export const Title = styled.Text`
  font-size: ${hp('4%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
  text-align: center;

  margin-top: ${hp('4%')};
  margin-bottom: ${hp('4%')};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
`;

export const TextButton = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${hp('4%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.green_avocado};
  text-align: center;
`;

export const TitleUpperCase = styled.Text`
  font-size: ${hp('3%')};
  font-family: 'HelveticaNeueBold';
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
  text-transform: uppercase;

  margin-top: ${hp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const Text = styled.Text`
  font-size: ${hp('2%')};
  color: ${colors.gray_light};
  font-style: italic;
`;

export const ButtonGamesContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: ${hp('2%')};
  margin-bottom: ${hp('2%')};
`;

export const GameButton = styled.TouchableOpacity`
  width: ${hp('12.5%')};
  display: flex;
  align-items: center;

  margin-top: ${wp('1%')};
  margin-right: ${wp('3%')};
  margin-bottom: ${wp('1%')};
  padding-top: ${wp('0.7%')};
  padding-bottom: ${wp('0.7%')};

  border-radius: ${hp('2%')};
  border-width: ${hp('0.3%')};
  border-color: ${({ color }) => (color ? color : colors.green)};

  background-color: ${({ isActived, color }) =>
    isActived ? color : colors.white_ice};
`;

export const GameButtonText = styled.Text`
  font-size: ${hp('1.5%')};
  color: ${({ isActived }) => (isActived ? colors.white_ice : colors.gray)};
  font-weight: bold;
`;
