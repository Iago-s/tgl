import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Logo from '../../components/UI/Logo';
import Footer from '../../components/UI/Footer';
import AuthForm from '../../components/UI/Forms/AuthForm';
import RegisterForm from '../../components/UI/Forms/RegisterForm';
import ResetPasswordForm from '../../components/UI/Forms/ResetPasswordForm';

import colors from '../../styles/colors';
import { Container } from './styles';

const Authentication = () => {
  const [visible, setVisible] = useState(true);

  const [display, setDisplay] = useState({
    auth: true,
    register: false,
    reset: false,
  });

  Keyboard.addListener('keyboardDidShow', () => {
    setVisible(false);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setVisible(true);
  });

  return (
    <>
      <BarStatus backgroundColor={colors.white} />
      <Container>
        <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 999 }} />
        <KeyboardAvoidingView>
          {visible && <Logo />}
          {display.auth && (
            <AuthForm setDisplay={setDisplay} visible={visible} />
          )}
          {display.register && (
            <RegisterForm setDisplay={setDisplay} visible={visible} />
          )}
          {display.reset && (
            <ResetPasswordForm setDisplay={setDisplay} visible={visible} />
          )}
        </KeyboardAvoidingView>
      </Container>
      {visible && <Footer />}
    </>
  );
};

export default Authentication;
