import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import game from './game';
import settings from './settings';

const rootReducer = combineReducers({ player, token, game, settings });

export default rootReducer;
