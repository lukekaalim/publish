import { buildPropertyReducer } from '../redux/property';
import { combineReducers } from 'redux';

import { EDIT_BUCKET_NAME, RESET_BUCKET_NAME } from '../actions/config';

const bucketNameReducer = buildPropertyReducer({
    EDIT: EDIT_BUCKET_NAME,
    RESET: RESET_BUCKET_NAME
}, '');

export default combineReducers({
  bucketName: bucketNameReducer,
});
