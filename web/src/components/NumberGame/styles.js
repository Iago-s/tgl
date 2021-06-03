import styled from 'styled-components';
import colors from '../../styles/colors';

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
