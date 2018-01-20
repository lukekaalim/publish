import { EDIT_ID, EDIT_SECRET, EDIT_BUCKET } from '../actions/auth';

const INITAL_STATE = {
  id: '',
  secret: '',
  bucket: 'default bucket',
  region: 'ap-southeast-2',
};

const auth = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EDIT_BUCKET:
      return {
        ...state,
        bucket: action.bucket,
      };
    case EDIT_ID:
      return {
        ...state,
        id: action.id,
      }
    case EDIT_SECRET:
      return {
        ...state,
        secret: action.secret,
      }
    default:
      return state;
  }
}

export default auth;
