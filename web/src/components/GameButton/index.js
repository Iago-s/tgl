import { useState } from 'react';

import { Button } from './styles';

const GameButton = (props) => {
  const [isActived, setIsActived] = useState(false);

  return (
    <Button
      onClick={() => {
        setIsActived(!isActived);
        props.onClick();
      }}
      color={props.color}
    >
      {props.name}
    </Button>
  );
};

export default GameButton;
