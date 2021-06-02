import styled from 'styled-components';
import colors from '../../styles/colors';

export const Box = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Compact = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
