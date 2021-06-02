import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Input from '../../Input';

import { Compact, FormContainer, ErrorMessage } from '../styles';
import { Title, Button } from '../../../styles/global';
import colors from '../../../styles/colors';

const RegisterForm = (props) => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    if (email === '' || !email.includes('@')) {
      setEmailError((old) => true);
    }

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);
    }

    if (name === '') {
      setNameError((old) => true);
    }

    if (password.length > 6 && email.includes('@') && name.length > 0) {
      history.push('/home');
      return;
    }
  };

  return (
    <Compact>
      <Title>Registration</Title>
      <FormContainer onSubmit={handleRegister}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            setNameError(false);
          }}
          hasError={nameError}
        />
        {nameError && <ErrorMessage>Preencha o nome.</ErrorMessage>}
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
          props.setDisplay({ auth: true, register: false, reset: false });
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
  );
};

export default RegisterForm;
