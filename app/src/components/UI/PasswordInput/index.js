import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import {
  Label,
  InputPasswordContainer,
  InputPassword,
  ShowPasswordButton,
} from './styles';
import colors from '../../../styles/colors';

const PasswordInput = ({
  label,
  password,
  setPassword,
  passwordError,
  setPasswordError,
  passwordIsVisible,
  setPasswordIsVisible,
}) => {
  const handleShowPassword = () => setPasswordIsVisible(!passwordIsVisible);

  return (
    <>
      <Label>{label}</Label>
      <InputPasswordContainer hasError={passwordError}>
        <InputPassword
          placeholder="Enter your password"
          secureTextEntry={passwordIsVisible}
          value={password}
          onChangeText={(value) => {
            setPassword(value);
            setPasswordError(false);
          }}
        />
        <ShowPasswordButton onPress={handleShowPassword}>
          <Ionicons
            name={passwordIsVisible ? 'eye-off-outline' : 'eye-outline'}
            size={hp('3.5%')}
            color={colors.gray_inputs}
          />
        </ShowPasswordButton>
      </InputPasswordContainer>
    </>
  );
};

export default PasswordInput;
