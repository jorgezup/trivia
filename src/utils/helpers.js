import md5 from 'crypto-js/md5';
import { HALF_TERM, DIFFICULTY_VALUES, SCORE_POINTS } from './constants';

export const shuffleArray = (arr) => [...arr].sort(() => Math.random() - HALF_TERM);

export const calculateQuestionScore = (timer, difficulty) => SCORE_POINTS
   + (timer * DIFFICULTY_VALUES[difficulty]);

export const formatUrl = (email) => {
  const hash = md5(email).toString();
  return `https://www.gravatar.com/avatar/${hash}`;
};
