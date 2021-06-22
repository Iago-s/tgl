import React, { useState } from 'react';

import BarStatus from '../../components/UI/BarStatus';
import Logo from '../../components/UI/Logo';
import Footer from '../../components/UI/Footer';
import AuthForm from '../../components/UI/Forms/AuthForm';
import RegisterForm from '../../components/UI/Forms/RegisterForm';
import ResetPasswordForm from '../../components/UI/Forms/ResetPasswordForm';

import colors from '../../styles/colors';
import { Container } from './styles';

const Authentication = () => {
  const [display, setDisplay] = useState({
    auth: true,
    register: false,
    reset: false,
  });

  return (
    <>
      <BarStatus backgroundColor={colors.white} />
      <Container>
        <Logo />
        {display.auth && <AuthForm setDisplay={setDisplay} />}
        {display.register && <RegisterForm setDisplay={setDisplay} />}
        {display.reset && <ResetPasswordForm setDisplay={setDisplay} />}
      </Container>
      <Footer />
    </>
  );
};

export default Authentication;
