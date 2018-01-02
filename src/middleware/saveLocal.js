const saveLocal = ({ getState }) => next => action => {
  const returnValue = next(action);
  if (action.saveLocal) {
    console.log(window.localStorage);
    const stateAsJSON = JSON.stringify(getState());
    window.localStorage.setItem('localState', stateAsJSON);
  }
  return returnValue;
};

export default saveLocal;
