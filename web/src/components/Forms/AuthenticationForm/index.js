import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import { AuthContext } from '../../../contexts/AuthContext';

import Input from '../../Input';

import {
  Compact,
  FormContainer,
  ForgetPassword,
  ErrorMessage,
} from '../styles';
import { Title, Button } from '../../../styles/global';
import colors from '../../../styles/colors';

const AuthenticationForm = (props) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleAuth = (event) => {
    event.preventDefault();

    if (email === '' || !email.includes('@')) {
      setEmailError((old) => true);
    }

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);
    }

    if (password.length > 6 && email.includes('@')) {
      authContext.login();
      history.push('/home');

      return;
    }
  };

  return (
    <Compact>
      <Title>Authentication</Title>
      <FormContainer onSubmit={handleAuth}>
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
            {email === '' ? 'Preencha o email.' : 'Digite um email valido'}
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
            props.setDisplay({ auth: false, register: false, reset: true });
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
    </Compact>
  );
};

export default AuthenticationForm;
