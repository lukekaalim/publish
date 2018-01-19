const composeReducers = (...reducers) => (state, action) => (
  reducers.reduce((acc, reducer) => reducer(acc, action), state)
);

export default composeReducers;
