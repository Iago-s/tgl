import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import {
  Form,
  Input,
  InputPasswordContainer,
  InputPassword,
  ShowPasswordButton,
  Label,
} from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const RegisterForm = ({ setDisplay, visible }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleShowPassword = () => {
    setPasswordIsVisible(!passwordIsVisible);
  };

  return (
    <>
      <Title>Registration</Title>
      <Form>
        <Label>Name</Label>
        <Input placeholder="Your name" />
        <Label>E-mail</Label>
        <Input placeholder="Your best email" />
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
        <Button>
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
