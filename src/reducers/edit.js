import { ADD_EDIT, CLEAR_EDITS } from '../actions/edit';

const INITAL_STATE = 0;

const edit = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ADD_EDIT:
      return state + 1;
    case CLEAR_EDITS:
      return 0;
    default:
      return state;
  }
}

export default edit;
