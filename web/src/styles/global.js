import styled, { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.white};
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    font-style: italic;
  }

  h1, p {
    margin: 0;
  }

  button {
    cursor: pointer;
    font-style: italic;
    border: none;
    background-color: transparent;
  }

  ol, li {
    list-style: none;
  }

  input {
    outline: none;
  }
`;

export const Title = styled.h1`
  color: ${colors.gray};
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 35)}px;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  color: ${({ color }) => (color ? color : colors.gray)};
  font-weight: bold;
  font-size: 35px;
`;
