import React from 'react';

import { Label, Field } from './styles';

const Input = ({ label, placeholder, value, setValue, hasError }) => {
  return (
    <>
      <Label>{label}</Label>
      <Field
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => setValue(value)}
        hasError={hasError}
      />
    </>
  );
};

export default Input;
