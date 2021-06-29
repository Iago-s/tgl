import React from 'react';

import { Label, Field } from './styles';

const Input = ({
  label,
  placeholder,
  value,
  setValue,
  hasError,
  setHasError,
  editable = true,
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Field
        editable={editable}
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
