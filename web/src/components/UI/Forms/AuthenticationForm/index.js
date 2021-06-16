import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AuthContext } from '../../../../contexts/AuthContext';
import api from '../../../../services/api';

import Input from '../../Input';
import LoadingSpinner from '../../LoadingSpinner';

import { FormContainer, ForgetPassword, ErrorMessage } from '../styles';
import { Box, Title, Button } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const AuthenticationForm = (props) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleAuth = async (event) => {
    event.preventDefault();

    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === '' || !regex.test(email)) {
      setEmailError((old) => true);
    }

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);
    }

    if (password.length > 6 && email.includes('@')) {
      setLoading(true);

      try {
        const data = {
          email,
          password,
        };

        const response = await api.post('/auth', JSON.stringify(data));

        setLoading(false);

        authContext.login(response.data.token);
        history.push('/home');
      } catch (err) {
        setLoading(false);

        if (err.response) {
          err.response.status === 401
            ? toast.error('Email ou senha errado.')
            : toast.error(
                'Ocorreu um erro. O problema é conosco não se preocupe!'
              );
          return;
        }

        toast.error('Ocorreu um erro. O problema é conosco não se preocupe!');
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Box width={100} height={50} justify="flex-start">
        <Title>Authentication</Title>
        <FormContainer onSubmit={handleAuth}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Input
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError(false);
                }}
                hasError={emailError}
              />
              {emailError && (
                <ErrorMessage>
                  {email === ''
                    ? 'Preencha o email.'
                    : 'Digite um email valido'}
                </ErrorMessage>
              )}
              <Input
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError(false);
                }}
                hasError={passwordError}
              />
              {passwordError && (
                <ErrorMessage>
                  {password === ''
                    ? 'Preencha a senha.'
                    : 'Digite uma senha com mais de 6 caracteres.'}
                </ErrorMessage>
              )}
              <ForgetPassword
                onClick={() => {
                  props.setDisplay({
                    auth: false,
                    register: false,
                    reset: true,
                  });
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
            </>
          )}
        </FormContainer>
        <Button
          onClick={() => {
            props.setDisplay({ auth: false, register: true, reset: false });
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
      </Box>
    </>
  );
};

export default AuthenticationForm;
