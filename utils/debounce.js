export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    timer = clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
