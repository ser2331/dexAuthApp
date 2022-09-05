import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert } from 'antd';
import { AuthForm } from '../AuthForm/AuthForm';
import { routes } from '../../../../types';

import s from './Auth.module.scss';

export const Auth = () => {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const goToRegistration = () => {
        navigate(routes.registration);
    };

    return (
        <div className={s.Auth}>
            {errorMessage && (
                <Alert
                    style={{ position: 'absolute', right: 24, top: '10vh' }}
                    message={errorMessage}
                    type="error"
                    closable
                    onClose={() => setErrorMessage('')}
                />
            )}

            <div className={s.authHeader}>
                <span className={s.headerContent}>
                    Нет аккаунта?
                    <Button type="link" className={s.linkBtn} onClick={goToRegistration}>Зарегистрироваться</Button>
                </span>
            </div>

            <div className={s.authContentWrapper}>
                <div className={s.authContent}>
                    <div className={s.title}>
                        Войти в Staff Pro
                    </div>

                    <AuthForm setErrorMessage={setErrorMessage} />
                </div>
            </div>
        </div>
    )
}