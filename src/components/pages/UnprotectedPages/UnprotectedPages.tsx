import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../../modules/authorization/components/LoginPage/LoginPage';
import { RegistrationPage } from '../../modules/authorization/components/RegistrationPage/RegistrationPage';

import s from './UnprotectedPages.module.scss';

export const UnprotectedPages = () => {
    return (
        <div className={s.UnprotectedPages}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
            </Routes>
        </div>
    );
};
