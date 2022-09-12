import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Settings } from '../Settings/Settings';
import { Invoices } from '../Invoices/Invoices';
import { Dashboard } from '../Dashboard/Dashboard';
import { Drafts } from '../Drafts/Drafts';
import { Templates } from '../Templates/Templates';
import { Reports } from '../Reports/Reports';
import { Help } from '../Help/Help';
import { routes } from '../../../../types';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Outlet />}>
        <Route path={routes.dashboard} element={<Dashboard />} />
      </Route>
      <Route path={routes.reports} element={<Reports />} />
      <Route path={routes.invoices} element={<Invoices />} />
      <Route path={routes.drafts} element={<Drafts />} />
      <Route path={routes.templates} element={<Templates />} />
      <Route path={routes.customers1} element={<div>customers/1</div>} />
      <Route path={routes.customers2} element={<div>customers/2</div>} />
      <Route path={routes.settings} element={<Settings />} />
      <Route path={routes.help} element={<Help />} />
    </Routes>
  );
};
