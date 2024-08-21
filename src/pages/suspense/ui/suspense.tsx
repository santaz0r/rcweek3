import { lazy, Suspense, useState } from 'react';
import { DICTIONARY } from '../../../shared/dictionary/dictionary';
import { Translate } from '../../../shared/ui/molecules/Translate';
import Modal from '../../../shared/lib/modals/modal/Modal';

import styles from './styles.module.scss';

async function delay<T>(promise: Promise<T>, time: number) {
  const result = await promise;
  return await new Promise<T>((resolve) => setTimeout(() => resolve(result), time));
}
const HeavyComponent = lazy(() => delay(import('../../../widgets/heavyComponent/HeavyComponent'), 1000));

const SuspensePage = () => {
  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);
  return (
    <>
      <h1>sus</h1>
      <div>
        <div>Открыть модалку</div>
        <button onClick={() => setIsOpenedModal(true)}>
          <Translate>{DICTIONARY.toOpen}</Translate>
        </button>
        <Modal isOpened={isOpenedModal} onClose={() => setIsOpenedModal(false)}>
          <div className={styles.api_content}>
            Компонент в модалке
            <Suspense fallback={<p>Вычисляем смысл жизни....</p>}>
              <HeavyComponent />
            </Suspense>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SuspensePage;
