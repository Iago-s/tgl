import React, { useState, useContext } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';
import PasswordInput from '../../PasswordInput';

import { AuthContext } from '../../../../contexts/AuthContext';
import api from '../../../../services/api';
import {
  isEmpty,
  isInvalidMail,
  isMinChar,
} from '../../../../utils/invalidInput';

import { Form } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const RegisterForm = ({ setDisplay, setLoading, visible }) => {
  const authContext = useContext(AuthContext);

  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = async () => {
    setNameError(isEmpty(name));
    setEmailError(isInvalidMail(email));
    setPasswordError(isMinChar(password, 6));

    if (!isMinChar(password, 6) && !isInvalidMail(email) && !isEmpty(name)) {
      setLoading(true);

      const data = {
        name,
        email,
        password,
      };

      try {
        await api.post('/users', JSON.stringify(data));

        const authData = {
          email,
          password,
        };

        const response = await api.post('/auth', JSON.stringify(authData));

        setLoading(false);

        authContext.login(response.data.token);
      } catch (err) {
        setLoading(false);

        if (err.response) {
          err.response.status === 400
            ? Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'There is already a registered user with this email.',
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
      <Title>Registration</Title>
      <Form>
        <Input
          label="Name"
          placeholder="Your name"
          value={name}
          setValue={setName}
          hasError={nameError}
          setHasError={setNameError}
        />
        <Input
          label="E-mail"
          placeholder="Your best email"
          value={email}
          setValue={setEmail}
          hasError={emailError}
          setHasError={setEmailError}
        />
        <PasswordInput
          label="Password"
          password={password}
          setPassword={setPassword}
          setPasswordError={setPasswordError}
          passwordError={passwordError}
          passwordIsVisible={passwordIsVisible}
          setPasswordIsVisible={setPasswordIsVisible}
        />
        <Button onPress={handleRegister}>
          <TextButton>
            Register{' '}
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
              auth: true,
              register: false,
              reset: false,
            })
          }
        >
          <Ionicons
            name="arrow-back-outline"
            size={hp('4%')}
            color={colors.gray}
          />{' '}
          Back
        </Title>
      )}
    </>
  );
};

export default RegisterForm;
