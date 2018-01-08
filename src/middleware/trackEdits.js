import { dirty } from '../reducers/dirty';
import { incrementalDebounce } from '../lib/debounce';

const trackEdits = ({ dispatch }) => {
  const debouncedDispatch = incrementalDebounce(
    (timesDebounced) => dispatch(dirty.add(timesDebounced)),
    500,
  );
  return (next) => action => {
    if (action.trackEdit) {
      debouncedDispatch();
    }
    return next(action);
  }
};

export default trackEdits;
