import { combineReducers } from 'redux';

import composeReducers from '../../redux/composeReducers';
import { buildPropertyReducer } from '../../redux/property';
import { EDIT_GAME, RESET_GAME } from '../../actions/game';

import contacts from './contacts';
import meta from './meta';
import sessions from './sessions';
import site from './site';

const gameProperty = buildPropertyReducer({
  EDIT: EDIT_GAME,
  RESET: RESET_GAME
}, {});

const gameCombined = combineReducers({
  sessions,
  site,
  contacts,
  meta,
});

export default composeReducers(gameProperty, gameCombined);
