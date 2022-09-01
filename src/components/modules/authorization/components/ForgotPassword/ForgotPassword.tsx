import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import s from './ForgotPassword.module.scss';

export const ForgotPassword = () => {
    const onFinish = (values: string) => {
        console.log('Finish', values);
    };

    const onFinishFailed = () => {
        console.log('FinishFailed');
    };

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
                    onFinishFailed={onFinishFailed}
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
                        <Input placeholder="Email" />
                    </Form.Item>

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
