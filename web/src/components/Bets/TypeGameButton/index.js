import { Button } from './styles';

const TypeGameButton = (props) => {
  return (
    <Button
      onClick={() => {
        props.onClick();
      }}
      color={props.color}
      isActived={props.currentGame === props.name ? true : false}
    >
      {props.name}
    </Button>
  );
};

export default TypeGameButton;
