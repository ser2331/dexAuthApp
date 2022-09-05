import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../core/redux';
import { routes } from '../../../../types';

import s from './ForgotPasswordSuccess.module.scss';

export const ForgotPasswordSuccess = () => {
    const navigate = useNavigate();
    
    const { changeableMail } = useAppSelector(state => state.authorizationReducer);

    const redirect = () => {
        navigate(routes.changeMail);
    };

    return (
        <div className={s.ForgotPasswordSuccess}>
            <div className={s.pageTitle}>StaffPro</div>
            <div className={s.ForgotPasswordCard}>
                <div className={s.cardTitle}>Восстановление доступа к аккаунту</div>
                <div className={s.cardDescription}>
                    {`На электронный адрес ${changeableMail} отправлено письмо.
                        Перейдите по ссылке в письме для создания нового пароля.`}
                </div>

                <Button style={{ width: '100%' }} type="primary" onClick={redirect}>
                    Подтвердить
                </Button>
            </div>
        </div>
    );
};
