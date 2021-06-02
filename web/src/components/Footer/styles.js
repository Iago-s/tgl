import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.footer`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  border-top-color: ${colors.gray_borders};
  border-top-style: solid;
  border-top-width: 2px;
`;

export const Copyright = styled.p`
  font-size: 15px;
  color: ${colors.gray};
`;
