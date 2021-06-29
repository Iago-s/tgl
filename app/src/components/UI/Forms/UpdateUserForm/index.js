import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import api from '../../../../services/api';
import { isEmpty } from '../../../../utils/invalidInput';

import Input from '../../Input';

import { Button, TextButton } from '../../../../styles/global';
import { Form } from '../styles';
import colors from '../../../../styles/colors';

const Account = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [oldName, setOldName] = useState('');

  const [email, setEmail] = useState('');

  const handleUpdateInfo = async () => {
    setNameError(() => isEmpty(name));

    if (name.length > 0) {
      const data = { name };

      if (oldName === name) {
        Toast.show({
          type: 'info',
          text1: 'Alert',
          text2: 'You did not edit the name!',
        });

        return;
      }

      setOldName(name);

      try {
        await api.put('/users', JSON.stringify(data));

        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Name changed successfully!',
        });
      } catch (err) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to change name.',
        });
      }
    }

    return;
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get('users/1');

        setName(response.data.name);
        setEmail(response.data.email);
        setOldName(response.data.name);
      } catch (err) {
        setLoading(true);

        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'An error has occurred. The problem is with us, do not worry!',
        });
      }
    };

    getUser();
  }, []);

  return (
    <>
      <Form>
        <Input
          label="Name"
          placeholder="Update name"
          value={name}
          setValue={setName}
          hasError={nameError}
          setHasError={setNameError}
        />
        <Input placeholder="E-mail" value={email} editable={false} />
        <Button color={colors.green_avocado} onPress={handleUpdateInfo}>
          <TextButton>Edit</TextButton>
        </Button>
      </Form>
    </>
  );
};

export default Account;
