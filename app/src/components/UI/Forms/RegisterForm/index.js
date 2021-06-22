import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import { Title } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const RegisterForm = ({ setDisplay }) => {
  return (
    <>
      <Title>Registration</Title>
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
    </>
  );
};

export default RegisterForm;
