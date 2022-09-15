import React from 'react';
import authImage from '../../../../assets/images/Vector.png';
import { Auth } from '../Auth/Auth';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../core/redux';
import Types from '../../../../types';

import s from './LoginPage.module.scss';

const { appSizesMap } = Types;

export const LoginPage = () => {
  const { t } = useTranslation();
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;
  const isTablet = size === appSizesMap.get('tablet').key;

  return (
    <div className={s.AuthPage}>
      {!isMobile && !isTablet && (
        <div className={s.leftZone}>
          <div className={s.descriptionWrapper}>
            <div className={s.title}>Staff Pro</div>

            <div className={s.description}>{t('hr_processes')}</div>
          </div>

          <div className={s.imageWrapper}>
            <img alt='auth' src={authImage} />
          </div>
        </div>
      )}

      <div className={s.contentWrapper}>
        <Auth />
      </div>
    </div>
  );
};
