import React, { useState, useEffect, useContext } from 'react';
import Toast from 'react-native-toast-message';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';
import PasswordInput from '../../PasswordInput';

import { AuthContext } from '../../../../contexts/AuthContext';
import api from '../../../../services/api';
import { isInvalidMail, isMinChar } from '../../../../utils/invalidInput';

import { Form, ForgotPassword } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const AuthForm = ({ setDisplay, setLoading, visible }) => {
  const authContext = useContext(AuthContext);

  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleAuth = async () => {
    setEmailError(() => isInvalidMail(email));
    setPasswordError(() => isMinChar(password, 6));

    if (!isMinChar(password, 6) && !isInvalidMail(email)) {
      setLoading(true);

      try {
        const data = {
          email,
          password,
        };

        const response = await api.post('/auth', JSON.stringify(data));

        setLoading(false);

        authContext.login(response.data.token);
      } catch (err) {
        setLoading(false);

        if (err.response) {
          err.response.status === 401
            ? Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Wrong email or password ',
              })
            : Toast.show({
                type: 'error',
                text1: 'Error',
                text2:
                  'An error has occurred. The problem is with us, do not worry!',
              });
          return;
        }

        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error has occurred. The problem is with us, do not worry!',
        });
      }
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
