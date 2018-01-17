import {
  buildKeyValueSetActions,
  buildKeyValueSetTypes,
} from '../redux/keyValueSet';

export const types = buildKeyValueSetTypes('test');

export const {
  edit: editTest,
  clear: clearTest,
  reset: resetTest,
} = buildKeyValueSetActions(types, { saveLocal: true, trackEdit: true });

export const {
  EDIT: EDIT_TEST,
  CLEAR: CLEAR_TEST,
  RESET: RESET_TEST,
} = types;
