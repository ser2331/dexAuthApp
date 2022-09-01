import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import { IAuth } from "../../interfaces/authorizationInterface";
import { useAppSelector } from "../../../../core/redux";
import { searchUser } from "../../halpers/halpers";

import s from "./Auth.module.scss";

export const Auth = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [numberAttempts, setNumberAttempts] = useState(0);
    const [isDisabled, setDisabled] = useState(false);

    const { arrayUsers } = useAppSelector(state => state.authorizationReducer);
    
    const redirect = () => {
        console.log("redirect");
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
                setErrorMessage("");
                setDisabled(false);
                setNumberAttempts(0);
            }, 3000);
            setErrorMessage("Превышено количество попыток входа, попробуйте позже");

            return () => clearTimeout(handler);
        }
    }, [numberAttempts])

    useEffect(() => {
        let login;
        let password;
        const loginJson = window.localStorage && window.localStorage.getItem("LOGIN");
        const passwordJson = window.localStorage && window.localStorage.getItem("PASSWORD");
        if (typeof loginJson === "string" && typeof passwordJson === "string") {
            try {
                login = JSON.parse(loginJson);
                password = JSON.parse(passwordJson);
                // eslint-disable-next-line no-empty
            } catch (e) {
            }
        }
        return console.log(`login:${login}; password:${password}`);
    }, [])

    return (
        <div className={s.Auth}>
            {errorMessage && (
                <Alert
                    style={{ position: "absolute", right: 24, top: "10vh" }}
                    message={errorMessage}
                    type="error"
                    closable
                    onClose={() => setErrorMessage("")}
                />
            )}

            <div className={s.authHeader}>
                <span className={s.headerContent}>
                    Нет аккаунта?
                    <Button type="link" className={s.linkBtn}>Зарегистрироваться</Button>
                </span>
            </div>

            <div className={s.authContentWrapper}>
                <div className={s.authContent}>
                    <div className={s.title}>
                        Войти в Staff Pro
                    </div>

                    <Form
                        className={s.formWrapper}
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
                </div>
            </div>
        </div>
    )
}