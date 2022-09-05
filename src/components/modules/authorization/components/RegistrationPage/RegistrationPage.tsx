import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../core/redux';
import { authorizationSlice } from '../../AuthorizationSlice';
import { IAuth } from '../../interfaces/authorizationInterface';
import { monthOptions, yearOptions, genderOptions } from '../../halpers/halpers';
import Types from '../../../../types';

import s from './RegistrationPage.module.scss';

const { setNewUser } = authorizationSlice.actions;
const { routingMap } = Types;

export const RegistrationPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFinish = (values: IAuth) => {
        dispatch(setNewUser({ ...values, isAdmin: true }));
        navigate(routingMap.get('login').value);
        console.log(values);
    };

    return (
        <div className={s.RegistrationPage}>
            <div className={s.pageTitle}>StaffPro</div>

            <div className={s.registrationCard}>
                <div className={s.cardTitle}>Зарегистрируйтесь</div>
                <Form
                    className={s.AuthForm}
                    name="basic"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
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

                    <Form.Item
                        name="sureName"
                        rules={[
                            { required: true, message: 'Обязательное поле' },
                            { max: 20, message: 'Максимально число символов 20' },
                        ]}
                    >
                        <Input placeholder="Фамилия" />
                    </Form.Item>

                    <div className={s.groupFields}>
                        <Form.Item
                            name="name"
                            rules={[
                                { required: true, message: 'Обязательное поле' },
                                { max: 20, message: 'Максимально число символов 20' },
                            ]}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[
                                { required: true, message: 'Обязательное поле' },
                                { max: 20, message: 'Максимально число символов 20' },
                            ]}
                        >
                            <Input placeholder="Отчество" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: 'Обязательное поле' },
                            { min: 8, message: 'Пароль должен содержать от 8 до 64 символов' },
                            { max: 64, message: 'Пароль должен содержать от 8 до 64 символов' },
                        ]}
                    >
                        <Input.Password placeholder="Пароль" style={{ padding: '0 12px' }} />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Обязательное поле',
                            },
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
                        <Input.Password placeholder="Повторите пароль" style={{ padding: '0 12px' }} />
                    </Form.Item>

                    <div className={s.birthday}>
                        <div className={s.birthdayTitle}>Дата рождения</div>
                        <div className={s.topWrapper}>
                            <Form.Item name="day" rules={[
                                { required: true, message: 'Обязательное поле' },
                                { type: 'number', max: 31, min: 1 },
                            ]}>
                                <InputNumber style={{ width: '100%' }} min={1} max={31} placeholder="День" />
                            </Form.Item>

                            <Form.Item
                                className={s.month}
                                name="month"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Select placeholder="Месяц" size="large">
                                    {monthOptions.map((option) => (
                                        <Select.Option key={option.value} value={option.value}>
                                            {option.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item name="year" rules={[{ required: true, message: 'Обязательное поле' }]}>
                                <Select placeholder="Год" size="large">
                                    {yearOptions().map((option) => (
                                        <Select.Option key={option} value={option}>
                                            {option}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>

                        <div className={s.bottomWrapper}>
                            <Form.Item
                                name="phone"
                                rules={[
                                    { required: true, message: 'Такого номера не существует' },
                                ]}
                            >
                                <InputNumber
                                    formatter={(value: number | string | undefined) => value ? value.toString().slice(0, 8) : ''}
                                    addonBefore="(+373)"
                                    placeholder="Телефон"
                                />
                            </Form.Item>

                            <Form.Item name="gender" rules={[{ required: true, message: 'Обязательное поле' }]}>
                                <Select placeholder="Пол" size="large">
                                    {genderOptions.map((option) => (
                                        <Select.Option key={option.value} value={option.value}>
                                            {option.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>

                    <Form.Item
                        name="readOut"
                        valuePropName="checked"
                        rules={[{ required: true, message: 'Для регистрации необходимо принять условия соглашения' }]}
                        className={s.checkBox}
                    >
                        <Checkbox>
                            Я согласен с
                            <Link to={routingMap.get('login').value} className={s.linkBtn}>
                                пользовательским соглашением
                            </Link>
                            и
                            <Link to={routingMap.get('login').value} className={s.linkBtn}>
                                политикой обработки персональных данных пользователей
                            </Link>
                        </Checkbox>
                    </Form.Item>

                    <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                        Создать аккаунт
                    </Button>
                </Form>

                <div className={s.haveAccount}>
                    Уже есть аккаунт в StaffPro?{' '}
                    <Link to={routingMap.get('login').value} className={s.linkBtn}>
                        Войдите
                    </Link>
                </div>
            </div>
        </div>
    );
};
