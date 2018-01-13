import { combineReducers } from 'redux';

import contacts from './contacts';
import meta from './meta';
import sessions from './sessions';
import site from './site';

export default combineReducers({
  sessions,
  site,
  contacts,
  meta,
});
