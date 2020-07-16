import { useEffect, RefObject, Dispatch, SetStateAction } from 'react';

const useOutsideAlerter = (ref: RefObject<HTMLDivElement>, setFocus: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const eventTarget = event.target as Node;
      if (ref.current && !ref.current.contains(eventTarget)) {
        setFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;