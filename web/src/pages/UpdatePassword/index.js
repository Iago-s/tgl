import Footer from '../../components/UI/Footer';
import UpdatePasswordForm from '../../components/UI/Forms/UpdatePasswordForm';

import { Container, Box, Title, For } from '../../styles/global';

const UpdatePassword = ({ token }) => {
  return (
    <>
      <Container>
        <Box>
          <Box width={100} height={50} justify="flex-start">
            <Title fontSize={65}>The</Title>
            <Title fontSize={65}>Greatest</Title>
            <Title fontSize={65}>App</Title>
            <For>for</For>
            <Title fontSize={83} uppercase>
              Lottery
            </Title>
          </Box>
        </Box>
        <UpdatePasswordForm token={token} />
      </Container>
      <Footer />
    </>
  );
};

export default UpdatePassword;
