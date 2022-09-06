import React from 'react';
import authImage from '../../../../assets/images/Vector.png';
import { Auth } from '../Auth/Auth';
import { useTranslation } from 'react-i18next';

import s from './LoginPage.module.scss';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <div className={s.AuthPage}>
      <div className={s.leftZone}>
        <div className={s.descriptionWrapper}>
          <div className={s.title}>Staff Pro</div>

          <div className={s.description}>{t('hr_processes')}</div>
        </div>

        <div className={s.imageWrapper}>
          <img alt='auth' src={authImage} />
        </div>
      </div>

      <div className={s.contentWrapper}>
        <Auth />
      </div>
    </div>
  );
};
