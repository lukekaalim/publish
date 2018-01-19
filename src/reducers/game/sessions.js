import {
  ADD_SESSION,
  REMOVE_SESSION,
  EDIT_SESSION
} from '../../actions/game/sessions';

const INITAL_STATE = [{ title: 'one' }, { title: 'two'}, {}];

const sessions = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case ADD_SESSION:
      return [...state, action.session]
    case EDIT_SESSION:
      return [
        ...state.slice(0, action.index),
        action.session,
        ...state.slice(action.index + 1),
      ];
    case REMOVE_SESSION:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default sessions;
