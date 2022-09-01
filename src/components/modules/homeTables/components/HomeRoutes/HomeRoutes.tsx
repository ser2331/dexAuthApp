import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Documents } from '../Documents/Documents';
import { Settings } from '../Settings/Settings';

export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>dashboard</div>} />
            <Route path="/reports" element={<div>reports</div>} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/documents/invoices" element={<div>invoices</div>} />
            <Route path="/documents/drafts" element={<div>drafts</div>} />
            <Route path="/documents/templates" element={<div>templates</div>} />
            <Route path="customers" element={<div>customers</div>} />
            <Route path="customers/1" element={<div>customers/1</div>} />
            <Route path="customers/2" element={<div>customers/2</div>} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<div>help</div>} />
        </Routes>
    )  
};