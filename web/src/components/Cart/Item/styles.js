import styled from 'styled-components';
import colors from '../../../styles/colors';

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
