const clealLocalStorage = () => {
  window.localStorage.removeItem('localState');
  window.location.reload();
}

export { clealLocalStorage };
