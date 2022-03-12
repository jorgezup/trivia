import getTokenApi from '../services/api/tokenApi';
import { saveTokenInLocalStorage } from '../services/localStorage/token';

export const GET_TOKEN = 'GET_TOKEN';

export const getTokenAction = (token) => ({
  type: GET_TOKEN,
  token,
});

export const getTokenThunk = () => async (dispatch) => {
  try {
    const { token } = await getTokenApi();
    saveTokenInLocalStorage(token);
    return dispatch(getTokenAction(token));
  } catch (error) {
    return error.message;
  }
};
