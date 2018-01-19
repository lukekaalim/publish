import { buildKeyValueSetReducer } from '../redux/keyValueSet';
import { EDIT_TEST, CLEAR_TEST, RESET_TEST } from '../actions/test';

const INITAL_STATE = {};

export default buildKeyValueSetReducer({
  EDIT: EDIT_TEST,
  CLEAR: CLEAR_TEST,
  RESET: RESET_TEST,
}, INITAL_STATE);
