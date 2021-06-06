import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Container = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0px 130px;
  border-bottom: 2px solid ${colors.gray_borders};

  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  margin-right: 60px;
`;

export const Logo = styled.h1`
  font-size: 44px;
  color: ${colors.gray};
  line-height: 70px;
  user-select: none;
`;

export const Line = styled.div`
  width: 105px;
  height: 6px;

  margin-left: 130px;
  margin-top: -4px;
  position: absolute;

  border-radius: 6px;
  background-color: ${colors.green_avocado};
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
