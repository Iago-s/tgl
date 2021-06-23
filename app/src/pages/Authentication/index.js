import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import Toast from 'react-native-toast-message';

import Loading from '../../components/UI/Loading';
import BarStatus from '../../components/UI/BarStatus';
import Logo from '../../components/UI/Logo';
import Footer from '../../components/UI/Footer';
import AuthForm from '../../components/UI/Forms/AuthForm';
import RegisterForm from '../../components/UI/Forms/RegisterForm';
import ResetPasswordForm from '../../components/UI/Forms/ResetPasswordForm';

import colors from '../../styles/colors';
import { Container } from './styles';

const Authentication = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 999 }} />
            <KeyboardAvoidingView>
              {visible && <Logo />}
              {display.auth && (
                <AuthForm
                  setDisplay={setDisplay}
                  setLoading={setLoading}
                  visible={visible}
                  navigation={navigation}
                />
              )}
              {display.register && (
                <RegisterForm
                  setDisplay={setDisplay}
                  setLoading={setLoading}
                  visible={visible}
                  navigation={navigation}
                />
              )}
              {display.reset && (
                <ResetPasswordForm
                  setDisplay={setDisplay}
                  setLoading={setLoading}
                  visible={visible}
                  navigation={navigation}
                />
              )}
            </KeyboardAvoidingView>
          </Container>
          {visible && <Footer />}
        </>
      )}
    </>
  );
};

export default Authentication;
