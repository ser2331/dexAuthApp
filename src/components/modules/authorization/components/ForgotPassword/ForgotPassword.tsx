import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { authorizationSlice } from '../../AuthorizationSlice';
import { userFinder } from '../../halpers/halpers';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { routes } from '../../../../types';

import s from './ForgotPassword.module.scss';

const { setChangeableMail } = authorizationSlice.actions;

export const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [errorMessage, setErrorMessage] = useState('');

    const { arrayUsers } = useAppSelector((state) => state.authorizationReducer);
    const mes = t('user_email_not_found');

    const redirect = () => {
        navigate(routes.forgotPasswordSuccess);
    };
    
    const setMail = (login: string) => {
        dispatch(setChangeableMail(login));
    };

    const onFinish = (values: {login: string }) => {
        userFinder(values, arrayUsers, setErrorMessage, redirect, setMail, mes);
    };

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if(errorMessage) {
            timer = setTimeout(() => {
                setErrorMessage('');
            }, 2000);

        }
        return () => clearTimeout(timer);

    }, [errorMessage]);

    return (
        <div className={s.ForgotPassword}>
            <div className={s.pageTitle}>StaffPro</div>
            <div className={s.ForgotPasswordCard}>
                <div className={s.cardTitle}>{t('forgot_your_password')}</div>
                <div className={s.cardDescription}>
                    {t('enter_your_email')}
                </div>

                <Form
                    className={s.AuthForm}
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                    requiredMark={false}
                >
                    <Form.Item
                        name="login"
                        rules={[
                            { required: true, message: t('required_field') },
                            { type: 'email', message: t('enter_mail') },
                        ]}
                    >
                        <Input placeholder="Email" className={errorMessage && s.error} />
                    </Form.Item>
                    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}

                    <Button style={{ width: '100%', marginBottom: 24 }} type="primary" htmlType="submit">
                        {t('confirm')}
                    </Button>
                </Form>

                <div className={s.haveAccount}>
                    {t('first_time_in')} StaffPro?
                    <Link to={routes.registration} className={s.linkBtn}>
                        {t('register')}
                    </Link>
                </div>
            </div>
        </div>
    );
};
