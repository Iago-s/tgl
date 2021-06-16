import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../../../services/api';

import Input from '../../Input';
import LoadingSpinner from '../../LoadingSpinner';

import { FormContainer, ErrorMessage } from '../styles';
import { Box, Title, Button } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const ResetPasswordForm = (props) => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleResetPass = async (event) => {
    event.preventDefault();

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || !regex.test(email.toLowerCase())) {
      setEmailError(true);

      return;
    }
    const data = {
      email,
      redirect_url: 'http://localhost:3000/reset-password/',
    };

    setLoading(true);
    try {
      await api.post('passwords', JSON.stringify(data));

      toast.success(
        'Enviamos um email a você, siga os passos para recuperar sua senha.'
      );

      setLoading(false);
      setEmail('');
    } catch (err) {
      setLoading(false);

      if (err.response) {
        err.response.status === 404
          ? toast.error(
              'Tem certeza que a um usuário cadastrado com esse email?'
            )
          : toast.error(
              'Ocorreu um erro. O problema é conosco não se preocupe!'
            );

        return;
      }

      toast.error('Ocorreu um erro. O problema é conosco não se preocupe!');
    }
  };

  return (
    <>
      <ToastContainer />
      <Box width={100} height={50} justify="flex-start">
        <Title>Reset password</Title>
        <FormContainer onSubmit={handleResetPass}>
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
              <Button color={colors.green_avocado}>
                Send Link
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
      </Box>
    </>
  );
};

export default ResetPasswordForm;
