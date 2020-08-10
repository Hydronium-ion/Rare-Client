import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { render } from '@testing-library/react';

interface IPotalProps {
  children: any;
  elementId: any;
}

const Portal = ({ children, elementId }: IPotalProps) => {
  const rootElement: any = useMemo(() => document.getElementById(elementId), [elementId]);

  return createPortal(children, rootElement);
};

export default Portal;
