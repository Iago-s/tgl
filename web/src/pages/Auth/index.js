import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Welcome from '../../components/Welcome';

import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { Box, Compact, FormContainer, ForgetPassword } from './styles';
import { Container, Title, Button } from '../../styles/global';
import colors from '../../styles/colors';

const Auth = () => {
  const [display, setDisplay] = useState({
    auth: true,
    register: false,
    reset: false,
  });

  const [email, setEmail] = useState({ value: '', hasError: false });
  const [password, setPassword] = useState({ value: '', hasError: false });
  const [name, setName] = useState({ value: '', hasError: false });

  const handleAuth = (event) => {
    event.preventDefault();

    if (email.value === '' || !email.value.includes('@')) {
      setEmail();
    }

    if (password.value === '') {
      setPassword();
    }
  };

  return (
    <>
      <Container>
        <Box>
          <Compact>
            <Welcome />
          </Compact>
        </Box>
        <Box>
          {display.auth && (
            <Compact>
              <Title>Authentication</Title>
              <FormContainer onSubmit={handleAuth}>
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={(event) => setEmail(event.target.value)}
                  hasError={email.hasError}
                />
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  hasError={password.hasError}
                />
                <ForgetPassword
                  onClick={() => {
                    setDisplay({ auth: false, register: false, reset: true });
                  }}
                >
                  I forget my password
                </ForgetPassword>
                <Button color={colors.green_avocado}>
                  Log In
                  <FaArrowRight
                    size={30}
                    color={colors.green_avocado}
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                </Button>
              </FormContainer>
              <Button
                onClick={() => {
                  setDisplay({ auth: false, register: true, reset: false });
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
              >
                Sign Up
                <FaArrowRight
                  size={30}
                  color={colors.gray}
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                />
              </Button>
            </Compact>
          )}
          {display.reset && (
            <Compact>
              <Title>Reset password</Title>
              <FormContainer onSubmit={() => {}}>
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={(event) => setEmail(event.target.value)}
                  hasError={email.hasError}
                />
                <Button color={colors.green_avocado}>
                  Send Link
                  <FaArrowRight
                    size={30}
                    color={colors.green_avocado}
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                </Button>
              </FormContainer>
              <Button
                onClick={() => {
                  setDisplay({ auth: true, register: false, reset: false });
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
              >
                <FaArrowLeft
                  size={30}
                  color={colors.gray}
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                />
                Back
              </Button>
            </Compact>
          )}
          {display.register && (
            <Compact>
              <Title>Registration</Title>
              <FormContainer onSubmit={() => {}}>
                <Input
                  placeholder="Name"
                  value={name.value}
                  onChange={(event) => setName(event.target.value)}
                  hasError={name.hasError}
                />
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={(event) => setEmail(event.target.value)}
                  hasError={email.hasError}
                />
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={(event) => setPassword(event.target.value)}
                  hasError={password.hasError}
                />
                <Button color={colors.green_avocado}>
                  Register
                  <FaArrowRight
                    size={30}
                    color={colors.green_avocaaado}
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                </Button>
              </FormContainer>
              <Button
                onClick={() => {
                  setDisplay({ auth: true, register: false, reset: false });
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
              >
                <FaArrowLeft
                  size={30}
                  color={colors.gray}
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                />
                Back
              </Button>
            </Compact>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Auth;
