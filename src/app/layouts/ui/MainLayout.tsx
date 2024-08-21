import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header';
import { Suspense } from 'react';
import { useTheme } from '../../../shared/lib/hooks/useTheme';

import styles from './styles.module.scss';

export const MainLayout = () => {
  const { isDark } = useTheme();
  return (
    <main className={`${styles.layout} ${isDark ? styles.dark : styles.light}`}>
      <Header />
      <Suspense fallback={<p>loading</p>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
