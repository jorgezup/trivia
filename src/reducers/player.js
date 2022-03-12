import { SET_PLAYER, UPDATE_PLAYER_STATS } from '../actions/player';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (
  state = INITIAL_STATE,
  { type, playerInfo, questionScore },
) => {
  switch (type) {
  case SET_PLAYER:
    return {
      assertions: 0,
      score: 0,
      ...playerInfo,
    };
  case UPDATE_PLAYER_STATS:
    return {
      ...state,
      score: state.score + questionScore,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};

export default playerReducer;
