const debounce = (func, wait = 100) => {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, wait);
    }
  };
}

// Debounces a function based on time, but also passes in the total amount of
// calls that were debounced during that time.

const incrementalDebounce = (func, wait = 100) => {
  let debounced = 0;
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args, debounced);
        debounced = 0;
        timeout = null;
      }, wait);
    }
    debounced++;
  };
};

export {
  debounce,
  incrementalDebounce,
};
