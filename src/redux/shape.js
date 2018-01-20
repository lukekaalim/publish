import { buildTypeName } from '../lib/redux';

export const buildShapeTypes = (name) => ({
  RESHAPE: buildTypeName('reshape', name),
});

export const buildShapeActions = ({ RESHAPE }, props = {}) => ({
  reshape: (shape) => ({ type: RESHAPE, shape, props... }),
});

export const buildShapeReducer =
  ({ RESHAPE }, initalState) =>
  (state = initalState, action) => {
    switch(action.type) {
      default:
        return { initalState }
    }
  };
