import React, { useCallback, useMemo } from 'react';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { getDayMonth, renderInfoTable } from '../../halpers/halpers';

import s from './Customers.module.scss';

export const Customers = () => {
  const { t } = useTranslation();

  const { arrayUsers } = useAppSelector((state) => state.authorizationReducer);
  const { pressedLocation } = useAppSelector((state) => state.homeReducer);
  const currentCustomer = useMemo(() => {
    return arrayUsers.find((el) => el.login === pressedLocation);
  }, [pressedLocation, arrayUsers]);

  const isData = currentCustomer?.login;

  const userData = useMemo(() => {
    if (isData) {
      return [
        { key: t('sure_name'), value: currentCustomer.sureName },
        { key: t('user_name'), value: currentCustomer.name },
        { key: t('last_name'), value: currentCustomer.lastName },
        { key: t('phone'), value: `(+373) ${currentCustomer.phone}` },
        {
          key: t('birthday'),
          value: `${getDayMonth(currentCustomer.day)}.${getDayMonth(currentCustomer.month)}.${
            currentCustomer.year
          }г.`,
        },
        { key: t('gender'), value: currentCustomer.gender },
        { key: t('email'), value: currentCustomer.login },
      ];
    }
  }, [currentCustomer, t, isData]);

  const userAuthData = useMemo(() => {
    if (isData) {
      return [
        { key: t('login'), value: currentCustomer.login },
        { key: t('password'), value: currentCustomer.password },
        { key: t('admin'), value: currentCustomer.isAdmin ? 'Yes' : 'No' },
      ];
    }
  }, [currentCustomer, t, isData]);

  const renderContent = useCallback(
    () => (
      <div className={s.content}>
        <div className={s.header}>
          <div className={s.title}>{`Customer ${currentCustomer?.login}`}</div>
        </div>

        <div className={s.body}>
          <div className={s.wrapper}>
            <div className={s.title}>{t('user_information')}</div>

            <div className={s.infoWrapper}>{renderInfoTable({ data: userData, s: s })}</div>
          </div>

          <div className={s.wrapper}>
            <div className={s.title}>{t('user_authorization_data')}</div>

            <div className={s.infoWrapper}>{renderInfoTable({ data: userAuthData, s: s })}</div>
          </div>

          <div className={s.wrapper}>
            <div className={s.title}>{t('user_description')}</div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor ea ipsam modi
              nesciunt nisi vero? A animi, deserunt eos, ex explicabo hic, laboriosam molestiae
              nobis pariatur quo ratione similique soluta temporibus. Accusantium ad aliquid animi
              aperiam atque earum expedita explicabo in molestias nisi, qui quisquam quod,
              veritatis? Atque esse, natus nobis officia omnis sed tenetur unde? Aliquam beatae
              ipsam iure modi quidem repudiandae vel! Aliquam architecto dolorem doloribus eum
              fugiat iusto, laborum perferendis qui sunt unde. Animi dolores eaque error optio, quo
              ratione. A atque dicta eius eveniet excepturi, impedit incidunt iste mollitia officiis
              porro qui quis rem sint.
            </p>
          </div>
        </div>
      </div>
    ),
    [currentCustomer, t]
  );

  return (
    <div className={s.Customers}>
      {isData && renderContent()}
      {!isData && <div>Empty Data</div>}
    </div>
  );
};
