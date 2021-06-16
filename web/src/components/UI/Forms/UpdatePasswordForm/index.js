import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../../../services/api';

import Input from '../../Input';
import LoadingSpinner from '../../LoadingSpinner';

import { FormContainer, ErrorMessage } from '../styles';
import { Box, Title, Button } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const UpdatePasswordForm = ({ token }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleUpdatePass = async (event) => {
    event.preventDefault();

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);

      return;
    }

    const data = {
      password,
      token,
    };

    setLoading(true);

    try {
      await api.put('passwords', JSON.stringify(data));

      toast.success(
        'Parabéns sua senha foi alterada com sucesso! Faça login novamente'
      );

      setLoading(false);

      setTimeout(() => {
        history.push('/');
      }, 5000);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        err.response.status === 404
          ? toast.error('Seu token não e valido.')
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
      <Box>
        <Title>Update Password</Title>
        <FormContainer onSubmit={handleUpdatePass}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
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
                Update
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
        <Button onClick={() => history.push('/')}>
          <FaArrowLeft
            size={30}
            color={colors.gray}
            style={{
              marginLeft: 20,
              marginRight: 20,
            }}
          />
          Auth
        </Button>
      </Box>
    </>
  );
};

export default UpdatePasswordForm;
