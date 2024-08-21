import { FC, PropsWithChildren } from 'react';
import Portal from '../../../ui/portal/Portal';

import styles from './styles.module.scss';

type Props = {
  onClose: () => void;
  isOpened: boolean;
};

const Modal: FC<PropsWithChildren<Props>> = ({ children, onClose, isOpened }) => {
  if (!isOpened) return null;
  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={onClose} />
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
