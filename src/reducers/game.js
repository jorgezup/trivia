import {
  GET_QUESTIONS,
  REQUEST_API,
  REQUEST_FAILED,
} from '../actions/game';

const INITIAL_STATE = {
  isFetching: false,
  error: '',
  questions: [],
};

const gameReducer = (state = INITIAL_STATE, { type, questions, error }) => {
  switch (type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case REQUEST_FAILED:
    return { ...state, isFetching: false, error };
  case GET_QUESTIONS:
    return { ...state, isFetching: false, questions };
  default:
    return state;
  }
};

export default gameReducer;
