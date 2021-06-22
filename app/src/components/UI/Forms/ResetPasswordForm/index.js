import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import { Form, Input, Label } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const ResetPasswordForm = ({ setDisplay, visible }) => {
  return (
    <>
      <Title>Reset password</Title>

      <Form>
        <Label>E-mail</Label>
        <Input placeholder="Enter a valid email" />
        <Button>
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
