import { combineReducers } from 'redux';

import auth from './auth';
import game from './game';
import view from './view';
import dirty from './dirty';
import test from './test';
import config from './config';

const reducers = combineReducers({
  auth,
  view,
  game,
  test,
  config,
  dirty,
});

export default reducers;
