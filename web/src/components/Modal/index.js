import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Box, Message, Button } from './styles';

const Modal = (props) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(true);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Container onClick={handleVisible} disable={visible}>
          <Box>
            <Message>{props.message}</Message>
            <Button onClick={handleVisible}>Ok</Button>
          </Box>
        </Container>,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
