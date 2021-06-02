import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Input from '../../Input';

import { Compact, FormContainer, ErrorMessage } from '../styles';
import { Title, Button } from '../../../styles/global';
import colors from '../../../styles/colors';

const ResetPasswordForm = (props) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleResetPass = (event) => {
    event.preventDefault();

    if (email === '' || !email.includes('@')) {
      setEmailError(true);

      return;
    }
  };

  return (
    <Compact>
      <Title>Reset password</Title>
      <FormContainer onSubmit={handleResetPass}>
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

export default ResetPasswordForm;
