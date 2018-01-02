import { combineReducers } from 'redux';

import auth from './auth';
import game from './game/';
import view from './view';
import edit from './edit';

const reducers = combineReducers({
  auth,
  view,
  game,
  edit,
});

export default reducers;
