import styled, { createGlobalStyle, css } from 'styled-components';
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

  button:hover {
    opacity: 0.80;
  }

  ol, li {
    list-style: none;
  }

  input {
    outline: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: ${({ middle }) => (middle ? 80 : 90)}vh;
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};

  padding: ${({ paddingTopAndBottom }) =>
      paddingTopAndBottom ? paddingTopAndBottom : 0}px
    ${({ paddingLeftAndRight }) =>
      paddingLeftAndRight ? paddingLeftAndRight : 0}px;

  box-sizing: border-box;
`;

export const Box = styled.div`
  width: ${({ width }) => (width ? width : 50)}%;
  height: ${({ height }) => (height ? height : 100)}%;

  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: center;
  user-select: none;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 35)}px;
  color: ${({ color }) => (color ? color : colors.gray)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

  ${({ titleIcon }) =>
    titleIcon &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
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

export const FeedbackMessage = styled.p`
  font-size: 17px;
  color: ${colors.gray};

  margin-top: ${({ margin }) => (margin ? margin : 0)}px;
  margin-bottom: ${({ margin }) => (margin ? margin : 0)}px;
`;

export const For = styled.p`
  width: 144px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: ${colors.white_ice};
  background-color: ${colors.green_avocado};
  border-radius: 100px;
  padding: 05px 0;
  margin: 30px 0;
`;
