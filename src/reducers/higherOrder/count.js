import { buildTypeName } from '../../lib/redux';
/*
  A simple function that constructs all the objects needed to create a simple
  count in redux.
*/

const count = (name, startingValue, actionProps = {}) => {
  const incrementType = buildTypeName('increment', name);
  const decrementType = buildTypeName('decrement', name);
  const resetType = buildTypeName('reset', name);
  const zeroType = buildTypeName('zero', name);
  const addType = buildTypeName('add', name);

  const increment = () => ({ type: incrementType, ...actionProps });
  const decrement = () => ({ type: decrementType, ...actionProps });
  const reset = () => ({ type: resetType, ...actionProps });
  const zero = () => ({ type: zeroType, ...actionProps });
  const add = (value) => ({ type: addType, add: value, ...actionProps });

  const reducer = (state = startingValue, action) => {
    switch(action.type) {
      case incrementType:
        return state + 1;
      case decrementType:
        return state - 1;
      case resetType:
        return startingValue;
      case zeroType:
        return 0;
      case addType:
        return state + action.add;
      default:
        return state;
    }
  };

  return ({
    type: {
      INCREMENT: incrementType,
      DECREMENT: decrementType,
      ADD: addType,
      RESET: resetType,
      ZERO: zeroType,
    },
    increment,
    decrement,
    reset,
    zero,
    add,
    reducer,
  });
};

export default count;
