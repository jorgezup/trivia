export const SET_GAME_SETTINGS = 'SET_GAME_SETTINGS';

export const setGameSettingsAction = (newSettings) => ({
  type: SET_GAME_SETTINGS,
  newSettings,
});
