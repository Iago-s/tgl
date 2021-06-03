import styled from 'styled-components';
import colors from '../../styles/colors';

export const GamesContainer = styled.div`
  width: 60%;
  padding: 50px 0px 0px 130px;
`;

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
  text-transform: uppercase;
`;

export const Wrapper = styled.div``;

export const ButtonsActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0;
`;

export const ActionButton = styled.button`
  font-weight: bold;
  color: ${colors.green};

  padding: 10px 20px;
  margin-right: 20px;

  border: 2px solid ${colors.green};
  border-radius: 10px;
`;

export const AddCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  color: ${colors.white_ice};

  padding: 10px 20px;

  border: 2px solid ${colors.green};
  border-radius: 10px;
  background-color: ${colors.green};
`;

export const NumberButton = styled.button`
  width: 50px;
  height: 50px;

  font-weight: bold;
  font-size: 17px;
  text-align: center;

  margin-right: 3px;
  margin-bottom: 3px;

  border-radius: 50%;
  border-color: 1px solid
    ${({ isActived }) => (isActived ? colors.green : colors.blue_light)};
  background-color: ${({ isActived }) =>
    isActived ? colors.green : colors.blue_light};
`;
