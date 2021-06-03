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
  width: 40%;
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
