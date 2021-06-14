import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Modal from '../../Modal';
import Input from '../../Input';
import LoadingSpinner from '../../LoadingSpinner';

import { FormContainer, ErrorMessage } from '../styles';
import { Box, Title, Button } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const ResetPasswordForm = (props) => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const handleResetPass = (event) => {
    event.preventDefault();

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || !regex.test(email.toLowerCase())) {
      setEmailError(true);

      return;
    }

    setAlertIsVisible(true);
    setEmail('');

    setTimeout(() => {
      setAlertIsVisible(false);
    }, 2000);
  };

  return (
    <>
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
      {alertIsVisible && (
        <Modal
          message="Enviaremos um email para você redefinir sua senha!"
          success={true}
        />
      )}
    </>
  );
};

export default ResetPasswordForm;
