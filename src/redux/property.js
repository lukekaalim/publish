import { buildTypeName } from '../lib/redux';
import { spacedToCamelCase } from '../lib/string';
/*
  A simple function that constructs all the objects needed to create a simple
  property in redux.
*/

export const buildPropertyTypes = (name) => ({
  EDIT: buildTypeName('edit', name),
  RESET: buildTypeName('reset', name),
});

export const buildPropertyActions = ({ EDIT, RESET }, props = {}) => ({
  edit: (value) => ({ type: EDIT, value, ...props }),
  reset: () => ({ type: RESET, ...props }),
});

export const buildPropertyReducer =
  ({ EDIT, RESET }, initalState) =>
  (state = initalState, action) => {
    switch (action.type) {
      case EDIT:
        return action.value;
      case RESET:
        return initalState;
      default:
        return state;
    }
  };

const property = (name, defaultValue, actionProps = {}) => {
  const camelCaseName = spacedToCamelCase(name);
  const type = buildTypeName('edit', name);
  const edit = (value) => ({ type, [camelCaseName]: value, ...actionProps });
  const reducer = (state = defaultValue, action) => (
    (action.type === type) ? action[camelCaseName] : state
  );

  return ({
    type,
    edit,
    reducer,
  });
};

export default property;
