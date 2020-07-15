export const throttle = (callback: Function, seconds: number) => {
  let inThrottle = false;

  return (...args: any[]) => {
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => {
        callback.apply(null, args);
        inThrottle = false;
      }, seconds);
    }
  };
};

export const debounce = (callback: Function, seconds: number) => {
  let inDebounce: number;
  return function(...args: any[]) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => callback.apply(context, args), seconds);
  };
};
