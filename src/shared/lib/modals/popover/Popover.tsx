import { FC, PropsWithChildren } from 'react';

import { FloatingPortal } from '@floating-ui/react';

type Props = {
  isOpened: boolean;
  styles: React.CSSProperties;
  setFloating: ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
};

const Popover: FC<PropsWithChildren<Props>> = ({ children, isOpened, styles, setFloating, getFloatingProps }) => {
  if (!isOpened) return null;
  return (
    <FloatingPortal>
      <div className="Tooltip" ref={setFloating} style={styles} {...getFloatingProps()}>
        {children}
      </div>
    </FloatingPortal>
  );
};

export default Popover;
