import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import {
  Form,
  Label,
  Input,
  InputPasswordContainer,
  InputPassword,
  ShowPasswordButton,
  ForgotPassword,
} from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const AuthForm = ({ setDisplay, visible }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleAuth = () => {
    if (password === '') {
      setPasswordError(true);
    }

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Hello',
      text2: 'This is some something 👋',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: hp('3%'),
      bottomOffset: 40,
    });
  };

  const handleShowPassword = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <>
      <Title>Authentication</Title>
      <Form>
        <Label>E-mail</Label>
        <Input placeholder="Enter your email" hasError={emailError} />
        <Label>Password</Label>
        <InputPasswordContainer hasError={passwordError}>
          <InputPassword
            placeholder="Enter your password"
            secureTextEntry={passwordIsVisible}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <ShowPasswordButton onPress={handleShowPassword}>
            <Ionicons
              name={passwordIsVisible ? 'eye-off-outline' : 'eye-outline'}
              size={hp('3.5%')}
              color={colors.gray_inputs}
            />
          </ShowPasswordButton>
        </InputPasswordContainer>
        <ForgotPassword
          onPress={() => {
            setDisplay({
              auth: false,
              register: false,
              reset: true,
            });
          }}
        >
          I Forget my password
        </ForgotPassword>

        <Button onPress={handleAuth}>
          <TextButton>
            Log In{' '}
            <Ionicons
              name="arrow-forward-outline"
              size={hp('4%')}
              color={colors.green_avocado}
            />
          </TextButton>
        </Button>
      </Form>

      {visible && (
        <Title
          onPress={() =>
            setDisplay({
              auth: false,
              register: true,
              reset: false,
            })
          }
        >
          Sign In{' '}
          <Ionicons
            name="arrow-forward-outline"
            size={hp('4%')}
            color={colors.gray}
          />
        </Title>
      )}
    </>
  );
};

export default AuthForm;
