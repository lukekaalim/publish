import { combineReducers } from 'redux';

import auth from './auth';
import game from './game/';
import view from './view';
import dirty from './dirty';
import test from './test';

const reducers = combineReducers({
  auth,
  view,
  game,
  test,
  dirty,
});

export default reducers;
