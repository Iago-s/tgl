import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';
import api from '../../services/api';

import Header from '../../components/UI/Header';
import Footer from '../../components/UI/Footer';
import Modal from '../../components/UI/Modal';
import Games from '../../components/Bets';
import Cart from '../../components/Cart';

import { Container, Title } from '../../styles/global';

const Bets = () => {
  const dispatch = useDispatch();

  const [games, setGames] = useState([]);

  const [currentGame, setCurrentGame] = useState([]);
  const [numbersSelected, setNumbersSelected] = useState([]);

  const [modal, setModal] = useState(<Modal />);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      const response = await api.get('/games');

      setGames(response.data);
      setCurrentGame(response.data.length !== 0 ? response.data[0] : []);
    };

    getGames();
  }, []);

  const handleChangeGame = (game) => {
    setCurrentGame(game);
    setNumbersSelected([]);
  };

  const handleAddCart = () => {
    if (
      numbersSelected.length < currentGame.max_number ||
      numbersSelected.length > currentGame.max_number
    ) {
      setShowModal(true);
      setModal(
        <Modal
          sucess={false}
          message={`Você deve adicionar ${currentGame.max_number} números para realizar o jogo ${currentGame.type}.`}
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
      while (ids.length < currentGame.max_number) {
        random = Math.floor(Math.random() * (currentGame.range - 1) + 1);

        if (ids.indexOf(random) === -1) {
          ids.push(random);
        }
      }
    } else {
      if (numbersSelected.length >= currentGame.max_number) {
        setNumbersSelected(() => []);
        return;
      }

      for (let i = 0; i < numbersSelected.length; i++) {
        ids.push(parseInt(numbersSelected[i]));
      }

      while (
        numbersRemaining <
        currentGame.max_number - numbersSelected.length
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
      <Container
        middle
        style={{
          alignItems: games.length === 0 && 'center',
          justifyContent: games.length === 0 && 'center',
        }}
      >
        {games.length === 0 ? (
          <Title>Não há nenhum jogo disponivel</Title>
        ) : (
          <>
            <Games
              games={games}
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
              games={games}
              setModal={setModal}
              setShowModal={setShowModal}
            />
          </>
        )}
      </Container>
      <Footer />
      {showModal && modal}
    </>
  );
};

export default Bets;
