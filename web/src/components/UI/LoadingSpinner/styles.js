import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    width: 100px;
    height: 100px;
    display: block;

    content: ' ';
    margin: 20px;

    border-radius: 50%;
    border: 6px solid teal;
    border-color: ${colors.green_avocado} transparent ${colors.green_avocado}
      transparent;

    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
