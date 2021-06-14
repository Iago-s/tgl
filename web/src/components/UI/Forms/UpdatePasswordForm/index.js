import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Input from '../../Input';

import { FormContainer, ErrorMessage } from '../styles';
import { Box, Title, Button } from '../../../../styles/global';
import colors from '../../../../styles/colors';

const UpdatePasswordForm = ({ token }) => {
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleUpdatePass = async (event) => {
    event.preventDefault();

    if (password === '' || password.length < 6) {
      setPasswordError((old) => true);

      return;
    }
  };

  return (
    <Box>
      <Title>Update Password</Title>
      <FormContainer onSubmit={handleUpdatePass}>
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
  );
};

export default UpdatePasswordForm;
