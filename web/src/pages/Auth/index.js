import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Welcome from '../../components/Welcome';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import {
  Box,
  Compact,
  FormContainer,
  ForgetPassword,
  ErrorMessage,
} from './styles';
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

  const validState = (value, type) => {
    switch (type) {
      case 'EMAIL':
        if (value === '' || (!value !== '' && !value.includes('@'))) {
          setEmail((oldValue) => {
            return {
              ...oldValue,
              hasError: true,
              message:
                value !== '' ? 'Digite um email válido' : 'Preencha o email',
            };
          });
        }
        break;
      case 'PASSWORD':
        if (value === '' || value.length < 6) {
          setPassword((oldValue) => {
            return {
              ...oldValue,
              hasError: true,
              message:
                value !== ''
                  ? 'A senha deve ter mais de 6 caracteres'
                  : 'Preencha a senha',
            };
          });
        }
        break;
      case 'NAME':
        if (value === '') {
          setName((oldValue) => {
            return {
              ...oldValue,
              hasError: true,
              message: 'Preencha o nome',
            };
          });
        }
        break;
      default:
        setEmail({
          value: '',
          hasError: false,
        });
        setPassword({
          value: '',
          hasError: false,
        });
        setName({
          value: '',
          hasError: false,
        });
        break;
    }
  };

  const handleAuth = (event) => {
    event.preventDefault();

    validState(email.value, 'EMAIL');
    validState(password.value, 'PASSWORD');
  };

  const handleRegister = (event) => {
    event.preventDefault();

    validState(name.value, 'NAME');
    validState(email.value, 'EMAIL');
    validState(password.value, 'PASSWORD');
  };

  const handleReset = (event) => {
    event.preventDefault();

    validState(email.value, 'EMAIL');
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
                  onChange={(event) => {
                    setEmail({ hasError: false, value: event.target.value });
                  }}
                  hasError={email.hasError}
                />
                {email.hasError && <ErrorMessage>{email.message}</ErrorMessage>}
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={(event) => {
                    setPassword({ hasError: false, value: event.target.value });
                  }}
                  hasError={password.hasError}
                />
                {password.hasError && (
                  <ErrorMessage>{password.message}</ErrorMessage>
                )}
                <ForgetPassword
                  onClick={() => {
                    setDisplay({ auth: false, register: false, reset: true });
                    validState();
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
                  validState();
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
              <FormContainer onSubmit={handleReset}>
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={(event) => {
                    setEmail({ hasError: false, value: event.target.value });
                  }}
                  hasError={email.hasError}
                />
                {email.hasError && <ErrorMessage>{email.message}</ErrorMessage>}
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
                  validState();
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
              <FormContainer onSubmit={handleRegister}>
                <Input
                  placeholder="Name"
                  value={name.value}
                  onChange={(event) => {
                    setName({ hasError: false, value: event.target.value });
                  }}
                  hasError={name.hasError}
                />
                {name.hasError && <ErrorMessage>{name.message}</ErrorMessage>}
                <Input
                  placeholder="Email"
                  value={email.value}
                  onChange={(event) => {
                    setEmail({ hasError: false, value: event.target.value });
                  }}
                  hasError={password.hasError}
                />
                {email.hasError && <ErrorMessage>{email.message}</ErrorMessage>}
                <Input
                  placeholder="Password"
                  value={password.value}
                  onChange={(event) => {
                    setPassword({ hasError: false, value: event.target.value });
                  }}
                  hasError={password.hasError}
                />
                {password.hasError && (
                  <ErrorMessage>{password.message}</ErrorMessage>
                )}
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
                  validState();
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
