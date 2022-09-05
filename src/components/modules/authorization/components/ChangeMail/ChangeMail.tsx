import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { authorizationSlice } from '../../AuthorizationSlice';
import { onChangePassword } from '../../halpers/halpers';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { IAuth } from '../../interfaces/authorizationInterface';
import Types from '../../../../types';

import s from './ChangeMail.module.scss';

const { setChangeableMail, setChangeableArray } = authorizationSlice.actions;
const { routingMap } = Types;

export const ChangeMail = () => {
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
        <div className={s.ChangeMail}>
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
                        ]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            { required: true, message: 'Обязательное поле' },
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
