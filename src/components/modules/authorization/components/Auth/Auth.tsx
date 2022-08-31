import React from "react";

import s from "./Auth.module.scss";

export const Auth = () => {
    return (
        <div className={s.Auth}>
            <div className={s.authHeader}>
                <span className={s.headerContent}>Нет аккаунта? <span className={s.registrationLink}>Зарегистрироваться</span></span>
            </div>

            <div className={s.authContentWrapper}>
                <div className={s.authContent}>
                    <div className={s.title}>
                        Войти в Staff Pro
                    </div>

                    <div className={s.formWrapper}>
                        <input/>
                    </div>
                </div>
            </div>

        </div>
    )
}