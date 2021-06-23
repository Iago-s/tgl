import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';
import PasswordInput from '../../PasswordInput';

import { isInvalidMail, isMinChar } from '../../../../utils/invalidInput';

import { Form, ForgotPassword } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const AuthForm = ({ setDisplay, visible }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleAuth = () => {
    setEmailError(() => isInvalidMail(email));
    setPasswordError(() => isMinChar(password, 6));

    if (!isMinChar(password, 6) && !isInvalidMail(email)) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Redirect...',
        text2: 'Welcome back! Wait we are redirecting you.',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: hp('3%'),
        bottomOffset: 40,
      });
    }

    return;
  };

  return (
    <>
      <Title>Authentication</Title>
      <Form>
        <Input
          label="E-mail"
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
          hasError={emailError}
          setHasError={setEmailError}
        />
        <PasswordInput
          label="Password"
          password={password}
          setPasswordError={setPasswordError}
          setPassword={setPassword}
          passwordError={passwordError}
          passwordIsVisible={passwordIsVisible}
          setPasswordIsVisible={setPasswordIsVisible}
        />
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
