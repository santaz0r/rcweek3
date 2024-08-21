import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { useTheme } from '../../../shared/lib/hooks/useTheme';
import { useLang } from '../../../shared/lib/hooks/useLang';
import { Translate } from '../../../shared/ui/molecules/Translate';
import { DICTIONARY } from '../../../shared/dictionary/dictionary';

type Props = {
  isActive: boolean;
};

type Lang = 'ru' | 'en';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { lang, switchLang } = useLang();

  const setActive = ({ isActive }: Props) => (isActive ? `${styles.active} ${styles.nav__item}` : styles.nav__item);

  const isCurrentLang = (value: string) =>
    value === lang ? `${styles.active_lang} ${styles.lang_btns__btn}` : styles.lang_btns__btn;

  const handleSwitch = (lang: Lang) => switchLang(lang);

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink className={setActive} to="/">
              <Translate>{DICTIONARY.effect}</Translate>
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to="/context">
              <Translate>{DICTIONARY.context}</Translate>
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to="/portals">
              <Translate>{DICTIONARY.portals}</Translate>
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to="/suspense">
              <Translate>{DICTIONARY.sus}</Translate>
            </NavLink>
          </li>
          <li>
            <NavLink className={setActive} to="/reconciliation">
              <Translate>{DICTIONARY.reconciliation}</Translate>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className={styles.switch} onClick={toggleTheme}>
        {isDark ? <Translate>{DICTIONARY.toLight}</Translate> : <Translate>{DICTIONARY.toDark}</Translate>}
      </button>

      <div className={styles.lang_btns}>
        <button onClick={() => handleSwitch('ru')} className={isCurrentLang('ru')}>
          RU
        </button>
        <button onClick={() => handleSwitch('en')} className={isCurrentLang('en')}>
          EN
        </button>
      </div>
    </header>
  );
};
