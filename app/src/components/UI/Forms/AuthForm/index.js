import React from 'react';
import { Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

import { Title } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const AuthForm = ({ setDisplay }) => {
  return (
    <>
      <Title>Authentication</Title>

      <Text
        onPress={() =>
          setDisplay({
            auth: false,
            register: false,
            reset: true,
          })
        }
      >
        Forgot password
      </Text>
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
    </>
  );
};

export default AuthForm;
