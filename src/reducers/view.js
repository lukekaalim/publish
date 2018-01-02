import { SWITCH_VIEW, SET_DRAWER_OPEN } from '../actions/view';

export const ALL_VIEWS = [
  'home',
  'contacts',
  'date',
];

const INITAL_STATE = {
  index: 0,
  isDrawOpen: false,
};

const view = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_VIEW:
      return {
        ...state,
        index: action.index,
      }
    case SET_DRAWER_OPEN:
      return {
        ...state,
        isDrawOpen: action.isDrawOpen,
      }
    default:
      return state;
  }
}

export default view;
