import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Settings } from '../Settings/Settings';
import { Invoices } from '../Invoices/Invoices';
import { Dashboard } from '../Dashboard/Dashboard';
import { Drafts } from '../Drafts/Drafts';
import { Templates } from '../Templates/Templates';
import { Reports } from '../Reports/Reports';
import Types from '../../../../types';

const { routingMap } = Types;

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path={routingMap.get('login').value} element={<Outlet />}>
                <Route path={routingMap.get('dashboard').value} element={<Dashboard />} />
            </Route>
            <Route path={routingMap.get('reports').value} element={<Reports />} />
            <Route path={routingMap.get('invoices').value}  element={<Invoices />} />
            <Route path={routingMap.get('drafts').value} element={<Drafts />} />
            <Route path={routingMap.get('templates').value} element={<Templates />} />
            <Route path={routingMap.get('customers1').value} element={<div>customers/1</div>} />
            <Route path={routingMap.get('customers2').value} element={<div>customers/2</div>} />
            <Route path={routingMap.get('settings').value} element={<Settings />} />
            <Route path={routingMap.get('help').value} element={<div>help</div>} />
        </Routes>
    )  
};