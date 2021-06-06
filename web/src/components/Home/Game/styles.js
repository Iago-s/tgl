import styled from 'styled-components';
import colors from '../../../styles/colors';

export const GamesItem = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-bottom: 30px;
  padding-left: 20px;

  border-left: 10px solid ${({ color }) => (color ? color : colors.gray)};
  border-radius: 9px;
`;

export const DateText = styled.p`
  font-size: 17px;
  color: ${colors.gray_light};
`;
