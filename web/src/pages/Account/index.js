import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import UpdateUserForm from '../../components/UI/Forms/UpdateUserForm';

import { Container } from '../../styles/global';

const Account = () => {
  return (
    <>
      <Header showHomeButton />
      <Container
        column
        middle
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <UpdateUserForm />
      </Container>
      <Footer />
    </>
  );
};

export default Account;
