import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { authorizationSlice } from '../../AuthorizationSlice';
import { userFinder } from '../../halpers/halpers';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';

import s from './ForgotPassword.module.scss';

const { setChangeableMail } = authorizationSlice.actions;

export const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const { arrayUsers } = useAppSelector((state) => state.authorizationReducer);

    const redirect = () => {
        navigate('/forgotPasswordSuccess');
    };
    
    const setMail = (login: string) => {
        dispatch(setChangeableMail(login));
    };

    const onFinish = (values: {login: string }) => {
        userFinder(values, arrayUsers, setErrorMessage, redirect, setMail);
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
                <div className={s.cardTitle}>Забыли пароль?</div>
                <div className={s.cardDescription}>
                    Введите ваш эл. адрес, чтобы восстановить доступ к своему аккаунту
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
                            { required: true, message: 'Обязательное поле' },
                            { type: 'email', message: 'Введите Email' },
                        ]}
                    >
                        <Input placeholder="Email" className={errorMessage && s.error} />
                    </Form.Item>
                    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}

                    <Button style={{ width: '100%', marginBottom: 24 }} type="primary" htmlType="submit">
                        Подтвердить
                    </Button>
                </Form>

                <div className={s.haveAccount}>
                    Впервые в StaffPro?
                    <Link to="/registration" className={s.linkBtn}>
                        Зарегистрируйтесь
                    </Link>
                </div>
            </div>
        </div>
    );
};
