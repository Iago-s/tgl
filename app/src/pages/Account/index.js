import React from 'react';
import Toast from 'react-native-toast-message';

import BarStatus from '../../components/UI/BarStatus';
import Header from '../../components/UI/Header';
import UpdateUserForm from '../../components/UI/Forms/UpdateUserForm';

import { Container } from './styles';
import colors from '../../styles/colors';

const Account = () => {
  return (
    <>
      <BarStatus backgroundColor={colors.white_ice} />
      <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 999 }} />
      <Header />
      <Container>
        <UpdateUserForm />
      </Container>
    </>
  );
};

export default Account;
