import { string } from 'prop-types';
import React from 'react';
import StyledButton from '../styles/elements/StyledButton';

const Button = (props) => {
  const { type, value, children } = props;
  return (
    <StyledButton { ...props } type={ type === 'button' ? 'button' : 'submit' }>
      {value}
      { children && <strong>{children}</strong> }
    </StyledButton>
  );
};

Button.propTypes = {
  type: string,
  value: string,
}.isRequired;

export default Button;
