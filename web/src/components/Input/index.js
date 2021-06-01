import { Field } from './styles';

const Input = (props) => {
  return (
    <Field
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      hasError={props.hasError}
    />
  );
};

export default Input;
