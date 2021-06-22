import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import { Form, Input, Label } from '../styles';
import { Title, Button, TextButton } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const RegisterForm = ({ setDisplay, visible }) => {
  return (
    <>
      <Title>Registration</Title>
      <Form>
        <Label>Name</Label>
        <Input placeholder="Your name" />
        <Label>E-mail</Label>
        <Input placeholder="Your best email" />
        <Label>Password</Label>
        <Input placeholder="Your password" />
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
