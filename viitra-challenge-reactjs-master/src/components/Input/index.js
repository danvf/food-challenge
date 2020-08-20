import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const Input = ({ name, icon: Icon, inputLabel, ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label>{inputLabel}</label>
      <div style={{ height: '20px' }}>
        {error && (
          <h6 style={{ color: '#C72828' }}>
            Campo não preenchido ou preenchido de maneira incorreta!!!
          </h6>
        )}
      </div>
      <Container isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Input;
