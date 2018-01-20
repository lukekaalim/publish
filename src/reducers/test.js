import { buildKeyValueSetReducer } from '../redux/keyValueSet';
import composeReducers from '../redux/composeReducers';
import { EDIT_TEST, CLEAR_TEST, RESET_TEST } from '../actions/test';

const INITAL_STATE = {};

const keyValueSet = buildKeyValueSetReducer({
  EDIT: EDIT_TEST,
  CLEAR: CLEAR_TEST,
  RESET: RESET_TEST,
}, INITAL_STATE);

export default composeReducers(keyValueSet);
