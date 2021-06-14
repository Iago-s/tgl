import { useState } from 'react';

import Footer from '../../components/UI/Footer';
import AutheticationForm from '../../components/UI/Forms/AuthenticationForm';
import RegisterForm from '../../components/UI/Forms/RegisterForm';
import ResetPasswordForm from '../../components/UI/Forms/ResetPasswordForm';

import { Container, Box, Title, For } from '../../styles/global';

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
          <Box width={100} height={50} justify="flex-start">
            <Title fontSize={65}>The</Title>
            <Title fontSize={65}>Greatest</Title>
            <Title fontSize={65}>App</Title>
            <For>for</For>
            <Title fontSize={83} uppercase>
              Lottery
            </Title>
          </Box>
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
