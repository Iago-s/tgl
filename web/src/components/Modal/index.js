import { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Header,
  Box,
  Message,
  ButtonContainer,
  Button,
} from './styles';

const Modal = (props) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Container onClick={handleVisible} disable={visible}>
          <Box success={props.success}>
            <Header success={props.success}>
              {props.success ? 'Sucesso!' : 'Error!'}
            </Header>
            <Message>{props.message}</Message>
            <ButtonContainer>
              <Button onClick={handleVisible}>OK</Button>
            </ButtonContainer>
          </Box>
        </Container>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
