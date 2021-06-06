import styled from 'styled-components';
import colors from '../../styles/colors';

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterContainer = styled.div`
  flex: 1;
  padding: 0 60px;
`;

export const FilterButton = styled.span`
  font-weight: bold;
  font-size: 17px;
  color: ${colors.gray_light};

  margin-right: 20px;
  cursor: pointer;
`;

export const GamesList = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;
