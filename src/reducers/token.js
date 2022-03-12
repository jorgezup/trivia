import { GET_TOKEN } from '../actions/token';

const INITIAL_STATE = '';

const tokenReducer = (state = INITIAL_STATE, { type, token }) => {
  switch (type) {
  case GET_TOKEN:
    return token;
  default:
    return state;
  }
};

export default tokenReducer;
