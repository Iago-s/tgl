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

export const GamesItem = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-bottom: 30px;
  padding-left: 20px;

  border-left: 10px solid ${({ color }) => (color ? color : colors.gray)};
  border-radius: 9px;
`;

export const DateText = styled.p`
  font-size: 17px;
  color: ${colors.gray_light};
`;
