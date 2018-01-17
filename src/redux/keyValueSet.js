import { buildTypeName } from '../lib/redux';

export const buildKeyValueSetTypes = (name) => ({
  EDIT: buildTypeName('edit', name),
  RESET: buildTypeName('reset', name),
  CLEAR: buildTypeName('clear', name),
});

export const buildKeyValueSetActions = ({ EDIT, RESET, CLEAR }, props = {}) => ({
  edit: (key, value) => ({ type: EDIT, key, value, ...props }),
  reset: () => ({ type: RESET, ...props }),
  clear: () => ({ type: CLEAR, ...props }),
});

export const buildKeyValueSetReducer =
  ({ EDIT, RESET, CLEAR }, initalState = {}) =>
  (state = initalState, action) => {
    switch(action.type) {
      case EDIT:
        return { ...state, [action.key]: action.value };
      case RESET:
        return { ...initalState };
      case CLEAR:
        return {};
      default:
        return state;
    }
};
