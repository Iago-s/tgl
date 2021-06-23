import React from 'react';

import { Label, Field } from './styles';

const Input = ({
  label,
  placeholder,
  value,
  setValue,
  hasError,
  setHasError,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Field
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => {
          setValue(value);
          setHasError(false);
        }}
        hasError={hasError}
      />
    </>
  );
};

export default Input;
