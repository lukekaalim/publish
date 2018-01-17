const saveLocal = ({ getState }) => next => action => {
  const returnValue = next(action);
  if (action.saveLocal) {
    const oldState = getState();
    const stateAsJSON = JSON.stringify({
      ...oldState,
      view: {
        ...oldState.view,
        isDrawOpen: false,
      }
    });
    window.localStorage.setItem('localState', stateAsJSON);
  }
  return returnValue;
};

export default saveLocal;
