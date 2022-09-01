import React, { FC, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { IAuth } from '../../interfaces/authorizationInterface';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { searchUser } from '../../halpers/halpers';
import { authorizationSlice } from '../../AuthorizationSlice';

import s from './AuthForm.module.scss';

const { setIsAuth } = authorizationSlice.actions;

interface IAuthForm {
    setErrorMessage: (e: string) => void;
}

export const AuthForm: FC<IAuthForm> = ({ setErrorMessage }) => {
    const dispatch = useAppDispatch();
    const [numberAttempts, setNumberAttempts] = useState(0);
    const [isDisabled, setDisabled] = useState(false);

    const { arrayUsers } = useAppSelector(state => state.authorizationReducer);
    
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
            const handler =  setTimeout(() => {
                setErrorMessage('');
                setDisabled(false);
                setNumberAttempts(0);
            }, 3000);
            setErrorMessage('Превышено количество попыток входа, попробуйте позже');

            return () => clearTimeout(handler);
        }
    }, [numberAttempts])

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
                rules={[{ required: true,  message: 'Please input your login!' },]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <div className={s.rememberMeWrapper}>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'Please checked!' }]}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button type="link" className={s.linkBtn}>Забыли пароль?</Button>
            </div>

            <Button type="primary" htmlType="submit" disabled={isDisabled} >Войти</Button>
        </Form>
    )
}