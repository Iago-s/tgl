import styled from 'styled-components';
import colors from '../../styles/colors';

export const Field = styled.input`
  font-size: 17px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray_inputs};
  padding: 30px;

  border-width: 0px 0px 2px 0px;
  border-style: solid;
  border-color: ${({ hasError }) =>
    hasError ? colors.red : colors.gray_borders};

  :focus {
    border-bottom-color: ${colors.gray};
  }
`;
