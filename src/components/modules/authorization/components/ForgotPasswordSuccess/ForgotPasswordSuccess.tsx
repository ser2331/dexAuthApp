import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../core/redux';
import { routes } from '../../../../types';

import s from './ForgotPasswordSuccess.module.scss';

export const ForgotPasswordSuccess = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { changeableMail } = useAppSelector(state => state.authorizationReducer);

    const redirect = () => {
        navigate(routes.changeMail);
    };

    return (
        <div className={s.ForgotPasswordSuccess}>
            <div className={s.pageTitle}>StaffPro</div>
            <div className={s.ForgotPasswordCard}>
                <div className={s.cardTitle}>{t('restoring_account_access')}</div>
                <div className={s.cardDescription}>
                    {`${t('to_email_address')} ${changeableMail} ${t('letter_sent')}`}
                </div>

                <Button style={{ width: '100%' }} type="primary" onClick={redirect}>
                    {t('confirm')}
                </Button>
            </div>
        </div>
    );
};
