import { combineReducers } from 'redux';

import contacts from './contacts';
import meta from './meta';

export default combineReducers({
  contacts,
  meta,
});
