import React, { useCallback, useMemo, useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { getDayMonth, renderInfoTable } from '../../halpers/halpers';
import { AddCustomer } from '../AddCustomer/AddCustomer';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';
import Types from '../../../../types';

import s from './Customers.module.scss';

const { appSizesMap } = Types;

export const Customers = () => {
  const { t } = useTranslation();

  const [showDrawer, setShowDrawer] = useState(false);

  const { customers } = useAppSelector((state) => state.homeReducer);
  const { pressedLocation } = useAppSelector((state) => state.homeReducer);
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;
  const currentCustomer = useMemo(() => {
    return customers.find((el) => el.key === pressedLocation);
  }, [pressedLocation, customers]);

  const isData = currentCustomer?.key;

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
      ];
    }
  }, [currentCustomer, t, isData]);

  const userAuthData = useMemo(() => {
    if (isData) {
      return [
        { key: t('logIn'), value: currentCustomer.login },
        { key: t('password'), value: currentCustomer.password },
        { key: t('admin'), value: currentCustomer.isAdmin ? 'Yes' : 'No' },
      ];
    }
  }, [currentCustomer, t, isData]);

  const showAddCustomerDrawer = () => {
    return setShowDrawer(true);
  };
  const onCloseDrawer = () => {
    return setShowDrawer(false);
  };

  const renderContent = useCallback(
    () => (
      <div className={s.content}>
        <PageHeader
          title={`${t('customer')} ${currentCustomer?.sureName} ${currentCustomer?.name} ${
            currentCustomer?.lastName
          } `}
          breadcrumb={[]}
          height={isMobile ? 122 : ''}
        />

        <Button type='primary' className={s.AddCustomerBtn} onClick={showAddCustomerDrawer}>
          {isMobile ? <PlusOutlined /> : t('add_customer')}
        </Button>

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
    [currentCustomer, t, isMobile]
  );

  return (
    <div className={s.Customers}>
      <AddCustomer showDrawer={showDrawer} onCloseDrawer={onCloseDrawer} isMobile={isMobile} />

      {isData && renderContent()}
      {!isData && <div>Empty Data</div>}
    </div>
  );
};
