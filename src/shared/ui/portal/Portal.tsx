import { createPortal } from 'react-dom';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);
  return createPortal(children, container);
};

export default Portal;
