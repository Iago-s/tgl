import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

import Header from '../../components/Header';
import Games from '../../components/Games';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';

import { Container } from '../../styles/global';

import DUMMY_GAMES from '../../services/games.json';

const Bets = () => {
  const dispatch = useDispatch();

  const [currentGame, setCurrentGame] = useState(DUMMY_GAMES.types[0]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  const handleAddCart = () => {
    if (
      numbersSelected.length < currentGame['max-number'] ||
      numbersSelected.length > currentGame['max-number']
    ) {
      alert('Erro');
      return;
    }

    let date = new Date();
    let formatDate =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

    dispatch(
      cartActions.addCart({
        game: {
          id: new Date().getTime().toString(),
          name: currentGame.type,
          numbers: numbersSelected.sort((a, b) => a - b).join(','),
          price: currentGame.price,
          color: currentGame.color,
          date: formatDate,
        },
      })
    );

    setNumbersSelected([]);
  };

  const handleClearGame = () => {
    setNumbersSelected([]);

    console.log(numbersSelected);
  };

  return (
    <>
      <Header showHomeButton />
      <Container middle>
        <Games
          DUMMY_GAMES={DUMMY_GAMES}
          currentGame={currentGame}
          numbersSelected={numbersSelected}
          setNumbersSelected={setNumbersSelected}
          onChangeGame={handleChangeGame}
          onClearGame={handleClearGame}
          onAddCart={handleAddCart}
        />
        <Cart currentGame={currentGame} DUMMY_GAMES={DUMMY_GAMES} />
      </Container>
      <Footer />
    </>
  );
};

export default Bets;
