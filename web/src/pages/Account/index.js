import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../services/api';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Input from '../../components/UI/Input';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

import { Container, Button } from '../../styles/global';
import { FormContainer, ErrorMessage } from '../../components/UI/Forms/styles';
import colors from '../../styles/colors';

const Account = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleUpdateInfo = async (event) => {
    event.preventDefault();

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);
    }

    if (name === '') {
      setNameError((old) => true);
    }

    if (password.length > 6 && name.length > 0) {
      setLoading(true);

      const data = {
        name,
        password,
      };
    }
  };

  return (
    <>
      <Header showHomeButton />
      <ToastContainer />
      <Container
        column
        middle
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <FormContainer onSubmit={handleUpdateInfo} style={{ width: '40%' }}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
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
              <Input placeholder="Email" value={email} readyonly />
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
                Edit
                <FaArrowRight
                  size={30}
                  color={colors.green_avocaaado}
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                />
              </Button>
            </>
          )}
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Account;
