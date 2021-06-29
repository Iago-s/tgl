import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../Input';
import UpdatePasswordForm from './UpdatePasswordForm';

import api from '../../../../services/api';
import { isInvalidMail } from '../../../../utils/invalidInput';

import { Form, ForgotPassword } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const ResetPasswordForm = ({ setDisplay, setLoading, visible }) => {
  const [hasToken, setHasToken] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleResetPassword = async () => {
    setEmailError(isInvalidMail(email));

    if (!isInvalidMail(email)) {
      const data = {
        email,
        redirect_url: 'http://localhost:3000/reset-password/',
      };

      setLoading(true);

      try {
        await api.post('/passwords', JSON.stringify(data));

        setLoading(false);
        setEmail('');
        setTimeout(() => {
          setHasToken(true);
        }, 4000);

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2:
            'We send you an email, follow the step by step to recover your password.',
        });
      } catch (err) {
        setLoading(false);

        if (err.response) {
          err.response.status === 404
            ? Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Is there a user registered with this email?',
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
          type: 'success',
          text1: 'Success',
          text2:
            'We send you an email, follow the step by step to recover your password.',
        });
      }
    }

    return;
  };

  const handleHasToken = () => setHasToken(true);

  return (
    <>
      {hasToken ? (
        <UpdatePasswordForm
          setLoading={setLoading}
          setDisplay={setDisplay}
          visible={visible}
          setHasToken={setHasToken}
        />
      ) : (
        <>
          <Title>Reset password</Title>
          <Form>
            <Input
              label="E-mail"
              placeholder="Your email"
              value={email}
              setValue={setEmail}
              hasError={emailError}
              setHasError={setEmailError}
            />
            <ForgotPassword onPress={handleHasToken}>
              I have a token
            </ForgotPassword>
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
      )}
    </>
  );
};

export default ResetPasswordForm;
