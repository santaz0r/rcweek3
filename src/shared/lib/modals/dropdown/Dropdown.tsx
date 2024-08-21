import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import Portal from '../../../ui/portal/Portal';

type Props = {
  isOpened: boolean;
  coords: {
    x: number;
    y: number;
  };
};

const Dropdown: FC<PropsWithChildren<Props>> = ({ children, isOpened, coords }) => {
  if (!isOpened) return null;

  const style = {
    position: 'absolute' as const,
    left: `${coords.x}px`,
    top: `${coords.y}px`,
  };

  console.log(coords);
  return (
    <Portal>
      <ul className={styles.drop} style={style}>
        {children}
      </ul>
    </Portal>
  );
};

export default Dropdown;
