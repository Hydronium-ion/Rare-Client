import { useState } from 'react';

const useSelectActives = function<T>(length: number) {
  const array = Array(length);
  array.fill(false);
  array[0] = true;
  const [actives, setActives] = useState(array);

  const clickHandler = (index: T) => () => {
    if (actives[(index as unknown) as number]) return;

    setActives(actives.map(active => !active));
  };

  return { actives, clickHandler };
};

export default useSelectActives;
