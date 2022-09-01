import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ForgotPassword } from '../../modules/authorization/components/ForgotPassword/ForgotPassword';
import { LoginPage } from '../../modules/authorization/components/LoginPage/LoginPage';
import { RegistrationPage } from '../../modules/authorization/components/RegistrationPage/RegistrationPage';

import s from './UnprotectedPages.module.scss';

export const UnprotectedPages = () => {
    return (
        <div className={s.UnprotectedPages}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
        </div>
    );
};
