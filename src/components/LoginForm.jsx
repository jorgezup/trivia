import { string, bool, func } from 'prop-types';
import React from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = ({
  name,
  gravatarEmail,
  isBtnDisabled,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={ handleSubmit }>
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
      value="Play"
      data-testid="btn-play"
      disabled={ isBtnDisabled }
    />
  </form>
);

LoginForm.propTypes = {
  gravatarEmail: string,
  isBtnDisabled: bool,
  name: string,
  handleChange: func,
  handleSubmit: func,
}.isRequired;

export default LoginForm;
