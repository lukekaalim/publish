import { combineReducers } from 'redux';

import auth from './auth';
import game from './game/';
import view from './view';
import dirty from './dirty';

const reducers = combineReducers({
  auth,
  view,
  game,
  dirty,
});

export default reducers;
