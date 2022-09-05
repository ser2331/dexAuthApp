import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authorizationSlice } from '../../AuthorizationSlice';
import { onChangePassword } from '../../halpers/halpers';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { IAuth } from '../../interfaces/authorizationInterface';
import Types from '../../../../types';

import s from './ChangePassword.module.scss';

const { setChangeableMail, setChangeableArray } = authorizationSlice.actions;
const { routingMap } = Types;

export const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { arrayUsers, changeableMail } = useAppSelector((state) => state.authorizationReducer);

    const redirect = () => {
        navigate(routingMap.get('login').value);
    };

    const setMail = () => {
        dispatch(setChangeableMail(''));
    };
    const setArrWithUserChangedPassword = (arr: IAuth[]) => {
        dispatch(setChangeableArray(arr));
    };

    const onFinish = (values: {password: string }) => {
        onChangePassword(
            values,
            arrayUsers,
            redirect,
            setMail,
            changeableMail,
            setArrWithUserChangedPassword
        );
    };

    return (
        <div className={s.ChangePassword}>
            <div className={s.pageTitle}>StaffPro</div>
            <div className={s.ForgotPasswordCard}>
                <div className={s.cardTitle}>Введите новый пароль</div>

                <Form
                    className={s.AuthForm}
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                    requiredMark={false}
                >
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: 'Обязательное поле' },
                            { min: 8, message: 'Пароль должен содержать от 8 до 64 символов' },
                            { max: 64, message: 'Пароль должен содержать от 8 до 64 символов' },
                        ]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            { required: true, message: 'Обязательное поле' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="confirmPassword" />
                    </Form.Item>

                    <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                        Подтвердить
                    </Button>
                </Form>
            </div>
        </div>
    );
};
