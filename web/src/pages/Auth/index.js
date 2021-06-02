import { useState } from 'react';

import Footer from '../../components/Footer';
import AutheticationForm from '../../components/Forms/AuthenticationForm';
import RegisterForm from '../../components/Forms/RegisterForm';
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm';

import { Box, Compact, For } from './styles';
import { Container, Title } from '../../styles/global';

const Auth = () => {
  const [display, setDisplay] = useState({
    auth: true,
    register: false,
    reset: false,
  });

  return (
    <>
      <Container>
        <Box>
          <Compact>
            <Title fontSize={65}>The</Title>
            <Title fontSize={65}>Greatest</Title>
            <Title fontSize={65}>App</Title>
            <For>for</For>
            <Title fontSize={83} uppercase>
              Lottery
            </Title>
          </Compact>
        </Box>
        <Box>
          {display.auth && <AutheticationForm setDisplay={setDisplay} />}
          {display.register && <RegisterForm setDisplay={setDisplay} />}
          {display.reset && <ResetPasswordForm setDisplay={setDisplay} />}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Auth;
