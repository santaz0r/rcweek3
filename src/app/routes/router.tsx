import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { ContextTask, UseEffectTask, NotFound, Portals, SuspensePage, Reconciliation } from './lazyRoutes';
import { MainLayout } from '../layouts/ui/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<UseEffectTask />} />
      <Route path="/context" element={<ContextTask />} />
      <Route path="/portals" element={<Portals />} />
      <Route path="/suspense" element={<SuspensePage />} />
      <Route path="/reconciliation" element={<Reconciliation />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
