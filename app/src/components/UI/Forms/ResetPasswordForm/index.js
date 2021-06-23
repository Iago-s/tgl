import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';

import { isInvalidMail } from '../../../../utils/invalidInput';

import { Form } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const ResetPasswordForm = ({ setDisplay, visible }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleResetPassword = () => {
    setEmailError(isInvalidMail(email));

    if (!isInvalidMail(email)) {
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
      <Title>Reset password</Title>

      <Form>
        <Input
          label="E-mail"
          placeholder="Your best email"
          value={email}
          setValue={setEmail}
          hasError={emailError}
          setHasError={setEmailError}
        />
        <Button onPress={handleResetPassword}>
          <TextButton>
            Send Link{' '}
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

export default ResetPasswordForm;
