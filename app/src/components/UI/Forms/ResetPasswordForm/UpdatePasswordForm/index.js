import React, { useState } from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

import Input from '../../../Input';

import api from '../../../../../services/api';
import { isEmpty, isMinChar } from '../../../../../utils/invalidInput';

import { Form } from '../../styles';
import { Title, Button, TextButton } from '../../../../../styles/global';
import colors from '../../../../../styles/colors';

const UpdatePasswordForm = ({
  setDisplay,
  setLoading,
  visible,
  setHasToken,
}) => {
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleUpdatePassword = async () => {
    setTokenError(() => isEmpty(token));
    setPasswordError(() => isMinChar(password, 6));

    if (!isMinChar(password, 6) && !isEmpty(token)) {
      const data = {
        password,
        token,
      };

      try {
        await api.put('/passwords', JSON.stringify(data));

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2:
            'Congratulations your password has been successfully changed! Log in again.',
        });

        setDisplay({
          auth: true,
          register: false,
          reset: false,
        });
      } catch (err) {
        setLoading(false);

        if (err.response) {
          err.response.status === 404
            ? Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Your token is not valid.',
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
      <Title>Update password</Title>
      <Form>
        <Input
          label="Token"
          placeholder="Token sent to your email"
          value={token}
          setValue={setToken}
          hasError={tokenError}
          setHasError={setTokenError}
        />
        <Input
          label="Password"
          placeholder="New password"
          value={password}
          setValue={setPassword}
          hasError={passwordError}
          setHasError={setPasswordError}
        />
        <Button onPress={handleUpdatePassword}>
          <TextButton>
            Update{' '}
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
          onPress={() => {
            setDisplay({
              auth: false,
              register: false,
              reset: true,
            });

            setHasToken(false);
          }}
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

export default UpdatePasswordForm;
