import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './UnprotectedPages.module.scss';
import { LoginPage } from '../../modules/authorization/components/LoginPage/LoginPage';
import { RegistrationPage } from '../../modules/authorization/components/RegistrationPage/RegistrationPage';

export const UnprotectedPages = () => {
    return (
        <div className={s.UnprotectedPages}>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/registration' element={<RegistrationPage />} />
            </Routes>
        </div>
    )
};