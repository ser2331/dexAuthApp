import React from 'react';

import s from './RegistrationPage.module.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
    const onFinish = () => {
        console.log('Finish');
    };    
    
    const onFinishFailed = () => {
        console.log('FinishFailed');
    };
    
    return (
        <div className={s.RegistrationPage}>
            <div className={s.pageTitle}>
                StaffPro
            </div>

            <div className={s.registrationCard}>
                <div className={s.cardTitle}>
                    Зарегистрируйтесь
                </div>
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
                        name="email"
                        rules={[{ required: true,  message: 'Обязательное поле' },]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="sureName"
                        rules={[{ required: true, message: 'Обязательное поле' }]}
                    >
                        <Input placeholder="Фамилия" />
                    </Form.Item>

                    <div className={s.groupFields}>
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>

                        <Form.Item
                            name="lastName"
                            rules={[{ required: true, message: 'Обязательное поле' }]}
                        >
                            <Input placeholder="Отчество" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Пароль" style={{ padding: '0 12px' }} />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Повторите пароль" style={{ padding: '0 12px' }} />
                    </Form.Item>

                    <div className={s.birthday}>
                        <div className={s.birthdayTitle}>Дата рождения</div>
                        <div className={s.topWrapper}>
                            <Form.Item
                                name="day"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="День" />
                            </Form.Item>

                            <Form.Item
                                className={s.month}
                                name="month"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="Месяц" />
                            </Form.Item>

                            <Form.Item
                                name="year"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="Год" />
                            </Form.Item>
                        </div>

                        <div className={s.bottomWrapper}>
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone!' }]}
                            >
                                <Input placeholder="Телефон" />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                rules={[{ required: true, message: 'Обязательное поле' }]}
                            >
                                <Input placeholder="Пол" />
                            </Form.Item>
                        </div>

                    </div>
                     
                    <Form.Item
                        name="readOut"
                        valuePropName="readOut"
                        rules={[{ required: true, message: 'Please checked!' }]}
                        className={s.checkBox}
                    >
                        <Checkbox>
                            Я согласен с
                            <Link to="/" className={s.linkBtn}>
                                пользовательским соглашением
                            </Link>
                            и
                            <Link to="/" className={s.linkBtn}>
                                политикой обработки персональных данных пользователей
                            </Link>
                        </Checkbox>
                    </Form.Item>

                        

                    <Button style={{ width: '100%' }} type="primary" htmlType="submit" >Создать аккаунт</Button>
                </Form>

                <div className={s.haveAccount}>
                    Уже есть аккаунт в StaffPro? <Link to="/" className={s.linkBtn} >Войдите</Link>
                </div>
            </div>


        </div>
    );
};