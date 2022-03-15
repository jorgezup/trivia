import { func, shape } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BsFillGearFill } from 'react-icons/bs';
import { getTokenThunk } from '../actions/token';
import LoginForm from '../components/LoginForm';
import Button from '../components/Button';
import { setPlayerAction } from '../actions/player';
import { Wrapper, LoginWrapper } from '../styles/elements/LoginWrapper';
import Logo from '../styles/elements/Logo';

class Login extends Component {
  state = {
    name: '',
    gravatarEmail: '',
    isBtnDisabled: true,
  }

  validateInputFields = () => {
    const { name, gravatarEmail } = this.state;
    if (name.length > 0 && gravatarEmail.length > 0) {
      this.setState({ isBtnDisabled: false });
    } else this.setState({ isBtnDisabled: true });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validateInputFields);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { getToken, setPlayer, history } = this.props;
    const { name, gravatarEmail } = this.state;
    setPlayer({ name, gravatarEmail });
    await getToken();
    history.push('/game');
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/config');
  }

  render() {
    return (
      <Wrapper>
        <Logo>Trivia</Logo>
        <LoginWrapper>
          <LoginForm
            { ...this.state }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
          />
          <Button
            type="button"
            value={ <BsFillGearFill /> }
            data-testid="btn-settings"
            onClick={ this.handleClick }
          >
            Settings
          </Button>
        </LoginWrapper>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  getToken: func,
  setPlayer: func,
  history: shape({
    push: func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(getTokenThunk()),
  setPlayer: (state) => dispatch(setPlayerAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
