import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: ${({ isActived }) => (isActived ? colors.white_ice : colors.gray)};
  text-align: center;

  margin-right: 10px;
  padding: 10px 20px;

  border-radius: 24px;
  border: 2px solid ${({ color }) => color};
  background-color: ${colors.white_ice};
`;
