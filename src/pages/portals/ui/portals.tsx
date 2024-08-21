import { useState } from 'react';
import { Translate } from '../../../shared/ui/molecules/Translate';
import { DICTIONARY } from '../../../shared/dictionary/dictionary';
import Modal from '../../../shared/lib/modals/modal/Modal';

import styles from './styles.module.scss';
import ElementWithTooltip from '../../../widgets/elementWithTooltip/ElementWithTooltip';
import DropdownElement from '../../../widgets/dropdownElement/DropdownElement';
import { useTheme } from '../../../shared/lib/hooks/useTheme';

const Portals = () => {
  const { isDark } = useTheme();
  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);

  const [isOpenedBubbling, setIsOpenedBubbling] = useState<boolean>(false);

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
  };

  return (
    <section className={`${styles.portals} ${isDark ? styles.dark : styles.light}`}>
      <h1>
        <Translate>{DICTIONARY.portals}</Translate>
      </h1>

      {/* пример со всплытием,  */}

      <div className={styles.wrapper}>
        <div onClick={handleClick}>
          <p>Количество кликов: {clicks}</p>
          <div>
            <div>Открыть модалку Bubbling</div>
            <button onClick={() => setIsOpenedBubbling(true)}>
              <Translate>{DICTIONARY.toOpen}</Translate>
            </button>
            <Modal isOpened={isOpenedBubbling} onClose={() => setIsOpenedBubbling(false)}>
              <Child />
            </Modal>
          </div>
        </div>

        {/*  */}

        <br />
        <div>
          <div>Открыть модалку</div>
          <button onClick={() => setIsOpenedModal(true)}>
            <Translate>{DICTIONARY.toOpen}</Translate>
          </button>
          <Modal isOpened={isOpenedModal} onClose={() => setIsOpenedModal(false)}>
            <div className={styles.content}>Content</div>
          </Modal>
        </div>
        <div>
          <DropdownElement dropdownOptions={['Опция 1', 'Опция 2', 'Опция 3']}>Открыть дроп-меню</DropdownElement>
        </div>
        <div>
          <ElementWithTooltip tooltipText="ToolTip 1">Наведи на кнопку</ElementWithTooltip>
        </div>
        <div>
          <ElementWithTooltip tooltipText="ToolTip 2">Наведи на кнопку 2</ElementWithTooltip>
        </div>
      </div>
    </section>
  );
};

function Child() {
  // Событие клика на этой кнопке будет всплывать вверх к родителю,
  // так как здесь не определён атрибут 'onClick'
  return (
    <div style={{ zIndex: 1 }}>
      <button>Кликните</button>
    </div>
  );
}

export default Portals;
