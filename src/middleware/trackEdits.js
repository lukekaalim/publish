import { addEdit } from '../actions/edit';

const trackEdits = ({ dispatch }) => next => action => {
  if (action.trackEdit) {
    dispatch(addEdit());
  }
  return next(action);
};

export default trackEdits;
