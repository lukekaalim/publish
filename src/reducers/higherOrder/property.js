import { buildTypeName } from '../../lib/redux';
import { spacedToCamelCase } from '../../lib/string';
/*
  A simple function that constructs all the objects needed to create a simple
  property in redux.
*/

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
