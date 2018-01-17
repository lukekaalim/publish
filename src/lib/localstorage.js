const clealLocalStorage = () => {
  window.localStorage.removeItem('localState');
  window.location.reload();
}

const retrieveLocalStorage = () => (
  JSON.parse(
    window.localStorage.getItem('localState')
  ) || {}
);

export { clealLocalStorage, retrieveLocalStorage };
