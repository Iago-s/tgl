import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ disable }) => (disable ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  position: absolute;

  background-color: transparent;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-weight: bold;

  padding-left: 20px;
  box-sizing: border-box;

  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-color: ${({ success }) => (success ? colors.green : colors.red)};
`;

export const Box = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  padding-bottom: 20px;

  border-radius: 14px;
  background-color: ${colors.white_ice};

  color: ${({ success }) => (success ? colors.green : colors.red)};
`;

export const Message = styled.p`
  font-size: 18px;
  padding-left: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 15%;

  font-weight: bold;
  font-size: 17px;
  color: ${colors.white_ice};
  text-align: center;

  padding: 10px;
  margin-right: 20px;

  border: 1px solid #3f5fe9;
  border-radius: 5px;
  background-color: #3f5fe9;
`;
