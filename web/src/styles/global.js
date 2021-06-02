import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', sans-serif;
    font-style: italic;

    margin: 0;
    padding: 0;
    background-color: ${colors.white};
  }

  h1, p {
    margin: 0;
  }

  button {
    font-style: italic;

    border: none;
    background-color: transparent;

    cursor: pointer;
  }

  ol, li {
    list-style: none;
  }

  input {
    outline: none;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 35)}px;
  color: ${({ color }) => (color ? color : colors.gray)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;

export const Container = styled.div`
  width: 100vw;
  height: ${({ middle }) => (middle ? 80 : 90)}vh;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};

  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => (color ? color : colors.gray)};
  font-weight: bold;
  font-size: 35px;

  padding: 30px 0;
`;

export const ButtonGames = styled.button`
  font-weight: bold;
  font-size: 14px;
  color: ${({ color }) => (color ? colors.white_ice : colors.gray)};
  text-align: center;

  margin: 0 10px;
  padding: 10px 20px;

  border-radius: 24px;
  border: 2px solid ${({ color }) => (color ? color : colors.white_ice)};
  background-color: ${({ color }) => (color ? color : colors.white_ice)};
`;
