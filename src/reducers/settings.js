import { SET_GAME_SETTINGS } from '../actions/settings';

const INITIAL_STATE = {
  amount: 5,
};

const settingsReducer = (state = INITIAL_STATE, { type, newSettings }) => {
  switch (type) {
  case SET_GAME_SETTINGS:
    return newSettings;
  default:
    return state;
  }
};

export default settingsReducer;
