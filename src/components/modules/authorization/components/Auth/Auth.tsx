import React from "react";
import { Button, Input } from "antd";

import s from "./Auth.module.scss";

export const Auth = () => {
    return (
        <div className={s.Auth}>
            <div className={s.authHeader}>
                <span className={s.headerContent}>
                    Нет аккаунта?
                    <Button type="link" className={s.registrationLink}>Зарегистрироваться</Button>
                </span>
            </div>

            <div className={s.authContentWrapper}>
                <div className={s.authContent}>
                    <div className={s.title}>
                        Войти в Staff Pro
                    </div>

                    <div className={s.formWrapper}>
                        <label className={s.label}>Эл. адрес</label>
                        <Input />
                    </div>
                </div>
            </div>
        </div>
    )
}