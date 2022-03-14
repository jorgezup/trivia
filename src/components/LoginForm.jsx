import { string, bool, func } from 'prop-types';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Input from './Input';
import Button from './Button';
import StyledForm from '../styles/elements/StyledForm';

const LoginForm = ({
  name,
  gravatarEmail,
  isBtnDisabled,
  handleChange,
  handleSubmit,
}) => (
  <StyledForm onSubmit={ handleSubmit }>
    <Input
      type="text"
      label="Nome"
      value={ name }
      name="name"
      onChange={ handleChange }
      data-testid="input-player-name"
    />
    <Input
      type="text"
      label="Email"
      value={ gravatarEmail }
      name="gravatarEmail"
      onChange={ handleChange }
      data-testid="input-gravatar-email"
    />
    <Button
      type="submit"
      value={ <FaPlay /> }
      data-testid="btn-play"
      disabled={ isBtnDisabled }
    >
      Play
    </Button>
  </StyledForm>
);

LoginForm.propTypes = {
  gravatarEmail: string,
  isBtnDisabled: bool,
  name: string,
  handleChange: func,
  handleSubmit: func,
}.isRequired;

export default LoginForm;
