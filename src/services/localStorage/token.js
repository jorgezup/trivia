const TOKEN = 'token';

export const getTokenFromLocalStorage = () => JSON
  .parse(localStorage.getItem(TOKEN)) || [];

export const saveTokenInLocalStorage = (token) => localStorage
  .setItem(TOKEN, JSON.stringify(token));
