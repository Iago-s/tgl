import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ disable }) => (disable ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: absolute;

  background-color: transparent;
`;

export const Box = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;

  border: 1px solid ${colors.green};
  border-radius: 14px;
  background-color: ${colors.green};
`;

export const Message = styled.p`
  font-size: 22px;
  color: ${colors.white_ice};
`;

export const Button = styled.button`
  width: 15%;

  font-weight: bold;
  font-size: 17px;
  color: ${colors.green};
  text-align: center;

  padding: 10px;

  border: 1px solid ${colors.white_ice};
  border-radius: 14px;
  background-color: ${colors.white_ice};
`;
