import styled from 'styled-components';
import colors from '../../styles/colors';

export const Subtitle = styled.p`
  font-size: 17px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${colors.gray};

  margin-top: ${({ margin }) => (margin ? margin : 0)}px;
  margin-bottom: ${({ margin }) => (margin ? margin : 0)}px;
`;

export const TextHigh = styled.span`
  font-size: 24;
  font-weight: normal;
  color: ${colors.gray_light};
`;

export const Wrapper = styled.div``;

export const CartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  padding-top: 50px;
  padding-right: 130px;
`;

export const CartIntern = styled.div`
  width: 85%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${colors.gray_ultra_light};
  border-radius: 10px;
  background-color: ${colors.white_ice};
`;

export const CartItems = styled.div`
  flex: 1;

  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${colors.gray_light};

  margin-right: 10px;
`;

export const GameInfosContainer = styled.div`
  flex: 1;
  flex-direction: column;

  border-left: 3px solid ${({ color }) => (color ? color : color.gray)};
  border-radius: 3px;
`;

export const Text = styled.p`
  font-size: 17px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ bold }) => (bold ? colors.gray : colors.gray_light)};

  margin: 10px;
`;

export const TextGameName = styled.span`
  font-weight: bold;
`;
