import Header from '../../components/Header';
import Games from '../../components/Games';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

import { Container } from '../../styles/global';

const Bets = () => {
  return (
    <>
      <Header showHomeButton />
      <Container middle>
        <Games />
        <Cart />
      </Container>
      <Footer />
    </>
  );
};

export default Bets;
