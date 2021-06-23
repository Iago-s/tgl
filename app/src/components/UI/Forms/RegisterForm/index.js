import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';
import PasswordInput from '../../PasswordInput';

import {
  isEmpty,
  isInvalidMail,
  isMinChar,
} from '../../../../utils/invalidInput';

import { Form } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const RegisterForm = ({ setDisplay, visible }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = () => {
    setNameError(isEmpty(name));
    setEmailError(isInvalidMail(email));
    setPasswordError(isMinChar(password, 6));

    if (!isMinChar(password, 6) && !isInvalidMail(email) && !isEmpty(name)) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success...',
        text2: 'Congratulations your account has been created!',
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
