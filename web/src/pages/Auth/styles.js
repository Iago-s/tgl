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

export const FormContainer = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;

  background: ${colors.white_ice} 0% 0% no-repeat padding-box;
  margin-top: 30px;

  border-radius: 14px;
  box-shadow: 0px 3px 25px #00000014;
`;

export const ForgetPassword = styled.p`
  font-size: 17px;
  text-align: right;
  font-weight: normal;
  color: ${colors.gray_forget_pass};
  padding-right: 30px;

  cursor: pointer;

  margin-top: 30px;
`;

export const ErrorMessage = styled.p`
  padding-left: 30px;
  color: ${colors.red};
`;
