import fetchTriviaApi from '../services/api/triviaApi';
import { getTokenThunk } from './token';
import { EXPIRED_TOKEN_CODE } from '../utils/constants';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const getQuestionsAction = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

export const requestApiAction = () => ({
  type: REQUEST_API,
});

export const requestFailedAction = (error) => ({
  type: REQUEST_FAILED,
  error,
});

const getNewToken = async (dispatch, getState, settings) => {
  await dispatch(getTokenThunk());
  const { token } = getState();
  const newResponse = await fetchTriviaApi(token, settings);
  return newResponse;
};

export const getQuestionsThunk = () => async (dispatch, getState) => {
  try {
    dispatch(requestApiAction());
    let response = {};
    const { token, settings } = getState();
    response = await fetchTriviaApi(token, settings);
    if (response.response_code === EXPIRED_TOKEN_CODE) {
      response = await getNewToken(dispatch, getState, settings);
    }
    return dispatch(getQuestionsAction(response.results));
  } catch (error) {
    return dispatch(requestFailedAction(error.message));
  }
};
