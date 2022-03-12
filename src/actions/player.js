export const SET_PLAYER = 'SET_PLAYER';
export const UPDATE_PLAYER_STATS = 'UPDATE_PLAYER_STATS';

export const setPlayerAction = (playerInfo) => ({
  type: SET_PLAYER,
  playerInfo,
});

export const updatePlayerStatsAction = (questionScore) => ({
  type: UPDATE_PLAYER_STATS,
  questionScore,
});
