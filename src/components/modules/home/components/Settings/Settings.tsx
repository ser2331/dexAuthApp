import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { EditUserInformationDrawer } from '../EditUserInformationDrawer/EditUserInformationDrawer';
import { EditUserAuthInfoDrawer } from '../EditUserAuthInfoDrawer/EditUserAuthInfoDrawer';
import Types, { routes } from '../../../../types';
import { getDayMonth, renderInfoTable } from '../../halpers/halpers';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';

import s from './Settings.module.scss';

const { setIsAuth } = authorizationSlice.actions;
const { appSizesMap } = Types;

export const Settings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const [showEditAuth, setShowEditAuth] = useState(false);

  const { currentUser } = useAppSelector((state) => state.authorizationReducer);
  const { login, name, avatar, day, lastName, gender, month, phone, sureName, year } = currentUser;
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

  const userData = useMemo(
    () => [
      { key: t('sure_name'), value: sureName },
      { key: t('user_name'), value: name },
      { key: t('last_name'), value: lastName },
      { key: t('phone'), value: `(+373) ${phone}` },
      { key: t('birthday'), value: `${getDayMonth(day)}.${getDayMonth(month)}.${year}г.` },
      { key: t('gender'), value: gender },
      { key: t('email'), value: login },
    ],
    [currentUser, t]
  );

  const logOut = () => {
    window.localStorage && window.localStorage.setItem('LOGIN', JSON.stringify(''));
    window.localStorage && window.localStorage.setItem('PASSWORD', JSON.stringify(''));
    dispatch(setIsAuth(false));
    navigate(routes.login);
  };

  const showEditUserInfo = () => {
    setShowEditDrawer(true);
  };
  const closeEditUserInfo = () => {
    setShowEditDrawer(false);
  };
  const closeEditAuth = () => {
    setShowEditAuth(false);
  };
  const onShowEditAuth = () => {
    setShowEditAuth(true);
  };

  return (
    <div className={s.Settings}>
      <EditUserInformationDrawer
        showEditDrawer={showEditDrawer}
        closeEditUserInfo={closeEditUserInfo}
        isMobile={isMobile}
      />

      <EditUserAuthInfoDrawer
        showEditAuth={showEditAuth}
        closeEditAuth={closeEditAuth}
        isMobile={isMobile}
      />

      <PageHeader title={t('personal_area')} breadcrumb={[]} width={'100%'} />

      <Button onClick={logOut} type='primary' className={s.logOut}>
        {t('log_out')}
      </Button>

      <div className={s.userCard}>
        <Card
          className={s.card}
          cover={
            <div
              className={s.cover}
              style={{
                background: `center / cover no-repeat url(${avatar})`,
              }}
            />
          }
          style={isMobile ? {} : { width: '40em', marginTop: 16 }}
          actions={[
            <SettingOutlined key='setting' onClick={onShowEditAuth} />,
            <EditOutlined key='edit' onClick={showEditUserInfo} />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          {renderInfoTable({ data: userData, s })}
        </Card>
      </div>
    </div>
  );
};
