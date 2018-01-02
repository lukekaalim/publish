import { EDIT_NAME } from '../../actions/game/meta';

const INITAL_STATE = {
  name: 'Untitled RPG game!',
}

const meta = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EDIT_NAME:
      return {
        ...state,
        name: action.name,
      }
    default:
      return state;
  }
}

export default meta;
