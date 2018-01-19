import { buildTypeName } from '../lib/redux';
import { spacedToCamelCase } from '../lib/string';

const list = (name, actionProps) => {
  const camelCaseName = spacedToCamelCase(name);
  const pushType = buildTypeName('push to', name);
  const removeType = buildTypeName('remove one of ', name);
  const modifyType = buildTypeName('modify one of', name);
  const clearType = buildTypeName('clear all', name);

  const push = (item) => ({ type: pushType, [camelCaseName]: item });
  const remove = (index) => ({ type: removeType, index });
  const modify = (item, index) => ({ type: modifyType, [camelCaseName]: item, index });
  const clear = () => ({ type: clearType });

  const reducer = (state = [], action) => {
    switch(action.type) {
      case pushType:
        return [...state, action.[camelCaseName]];
      case removeType:
        state.splice(action.index, 1);
        return [...state];
      case modifyType:
        state[action.index] = action[camelCaseName];
        return [...state];
      case clearType:
        return [];
      default:
        return state;
    }
  };

  return ({
    type: {
      PUSH: pushType,
      REMOVE: removeType,
      MODIFY: modifyType,
      CLEAR: clearType,
    },
    push,
    remove,
    modify,
    clear,
    reducer,
  });
};

export default list;
