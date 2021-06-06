import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

import Header from '../../components/Header';
import Games from '../../components/Games';
import Cart from '../../components/Cart';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import { Container } from '../../styles/global';

import DUMMY_GAMES from '../../services/games.json';

const Bets = () => {
  const dispatch = useDispatch();

  const [currentGame, setCurrentGame] = useState(DUMMY_GAMES.types[0]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  const [modal, setModal] = useState(<Modal />);
  const [showModal, setShowModal] = useState(false);

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  const handleAddCart = () => {
    if (
      numbersSelected.length < currentGame['max-number'] ||
      numbersSelected.length > currentGame['max-number']
    ) {
      setShowModal(true);
      setModal(
        <Modal
          sucess={false}
          message={`Você deve adicionar ${currentGame['max-number']} números para realizar o jogo ${currentGame.type}.`}
        />
      );

      setTimeout(() => {
        setShowModal(false);
      }, 2000);
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

  const handleCompleteGame = () => {
    let ids = [];
    let random;
    let numbersRemaining = 0;

    if (numbersSelected.length === 0) {
      while (ids.length < currentGame['max-number']) {
        random = Math.floor(Math.random() * (currentGame.range - 1) + 1);

        if (ids.indexOf(random) === -1) {
          ids.push(random);
        }
      }
    } else {
      if (numbersSelected.length >= currentGame['max-number']) {
        setNumbersSelected(() => []);
        return;
      }

      for (let i = 0; i < numbersSelected.length; i++) {
        ids.push(parseInt(numbersSelected[i]));
      }

      while (
        numbersRemaining <
        currentGame['max-number'] - numbersSelected.length
      ) {
        random = Math.floor(Math.random() * (currentGame.range - 1) + 1);

        if (ids.indexOf(random) === -1) {
          ids.push(random);
          numbersRemaining++;
        }
      }
    }

    setNumbersSelected(ids.sort((a, b) => a - b));
  };

  const handleClearGame = () => {
    setNumbersSelected([]);
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
          onCompleteGame={handleCompleteGame}
        />
        <Cart
          currentGame={currentGame}
          DUMMY_GAMES={DUMMY_GAMES}
          setModal={setModal}
          setShowModal={setShowModal}
        />
      </Container>
      <Footer />
      {showModal && modal}
    </>
  );
};

export default Bets;
