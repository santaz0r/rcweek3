import { DICTIONARY } from '../../../shared/dictionary/dictionary';
import { useTheme } from '../../../shared/lib/hooks/useTheme';
import { Translate } from '../../../shared/ui/molecules/Translate';

import styles from './styles.module.scss';

const ContextTask = () => {
  const { isDark } = useTheme();
  return (
    <h1 className={`${styles.context} ${isDark ? styles.dark : styles.light}`}>
      <Translate>{DICTIONARY.context}</Translate>
    </h1>
  );
};

export default ContextTask;
