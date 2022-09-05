import React, { FC, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { IAuth } from '../../interfaces/authorizationInterface';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { searchUser } from '../../halpers/halpers';
import { authorizationSlice } from '../../AuthorizationSlice';
import { Link } from 'react-router-dom';
import Types from '../../../../types';

import s from './AuthForm.module.scss';

const { setIsAuth } = authorizationSlice.actions;

interface IAuthForm {
    setErrorMessage: (e: string) => void;
}

const { routingMap } = Types;

export const AuthForm: FC<IAuthForm> = ({ setErrorMessage }) => {
    const dispatch = useAppDispatch();

    const [numberAttempts, setNumberAttempts] = useState(0);
    const [isDisabled, setDisabled] = useState(false);

    const { arrayUsers } = useAppSelector((state) => state.authorizationReducer);

    const redirect = () => {
        dispatch(setIsAuth(true));
    };

    const onFinish = (values: IAuth) => {
        setNumberAttempts(numberAttempts + 1);
        searchUser(arrayUsers, values, setErrorMessage, redirect);
    };

    const onFinishFailed = () => {
        setNumberAttempts(numberAttempts + 1);
    };

    useEffect(() => {
        if (numberAttempts > 3) {
            setDisabled(true);
            const handler = setTimeout(() => {
                setErrorMessage('');
                setDisabled(false);
                setNumberAttempts(0);
            }, 3000);
            setErrorMessage('Превышено количество попыток входа, попробуйте позже');

            return () => clearTimeout(handler);
        }
    }, [numberAttempts]);

    return (
        <Form
            className={s.AuthForm}
            name="basic"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            requiredMark={false}
        >
            <Form.Item
                label="Эл. адрес"
                name="login"
                rules={[
                    { required: true, message: 'Обязательное поле' },
                    { min: 4, message: 'Логин должен содержать от 4 до 64 символов' },
                    { max: 64, message: 'Пароль должен содержать от 4 до 64 символов' },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    { required: true, message: 'Обязательное поле' },
                    { min: 8, message: 'Пароль должен содержать от 8 до 64 символов' },
                    { max: 64, message: 'Пароль должен содержать от 8 до 64 символов' },
                ]}
            >
                <Input.Password style={{ padding: '0 12px' }} />
            </Form.Item>

            <div className={s.rememberMeWrapper}>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Link to={routingMap.get('forgotPassword').value} className={s.linkBtn}>
                    Забыли пароль?
                </Link>
            </div>

            <Button type="primary" htmlType="submit" disabled={isDisabled}>
                Войти
            </Button>
        </Form>
    );
};
