import {
  ADD_SESSION,
  REMOVE_SESSION,
  EDIT_SESSION
} from '../../actions/game/sessions';

const INITAL_STATE = [{ title: 'one' }, { title: 'two'}, {}];

const sessions = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case ADD_SESSION:
      return [
        ...state,
        action.session,
      ];
    case REMOVE_SESSION:
      state.splice(action.index, 1);
      return [...state];
    case EDIT_SESSION:
      state[action.index] = action.session;
      return [...state];
    default:
      return state;
  }
}

export default sessions;
