import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from '../../../../services/api';

import Input from '../../Input';
import LoadingSpinner from '../../LoadingSpinner';

import { Button } from '../../../../styles/global';
import { FormContainer, ErrorMessage } from '../styles';
import colors from '../../../../styles/colors';

const Account = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [oldName, setOldName] = useState('');

  const [email, setEmail] = useState('');

  const handleUpdateInfo = async (event) => {
    event.preventDefault();

    if (name === '') {
      setNameError((old) => true);
    }

    if (name.length > 0) {
      const data = {
        name,
      };

      if (oldName === name) {
        toast.warning('Você não editou nada!');

        return;
      }

      setOldName(name);
      setLoading(true);

      try {
        await api.put('/users', JSON.stringify(data));

        setLoading(false);

        toast.success('Parabéns, seu nome foi alterado.');
      } catch (err) {
        setLoading(false);

        toast.error('Falha ao alterar o nome.');
      }
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await api.get('users/1');

      setName(response.data.name);
      setEmail(response.data.email);
      setOldName(response.data.name);
    };

    getUser();
  }, []);

  return (
    <>
      <ToastContainer />
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
    </>
  );
};

export default Account;
