import { lazy } from 'react';

const UseEffectTask = lazy(() => import('../../pages/effect/ui/effect'));
const ContextTask = lazy(() => import('../../pages/context/ui/context'));
const Portals = lazy(() => import('../../pages/portals/ui/portals'));
const SuspensePage = lazy(() => import('../../pages/suspense/ui/suspense'));
const Reconciliation = lazy(() => import('../../pages/reconciliation/ui/reconciliation'));
const NotFound = lazy(() => import('../../pages/404'));

export { UseEffectTask, ContextTask, NotFound, Portals, SuspensePage, Reconciliation };
