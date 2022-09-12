import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { routes } from '../../../../types';

import s from './Settings.module.scss';
import { EditUserInformationDrawer } from '../EditUserInformationDrawer/EditUserInformationDrawer';

const { setIsAuth } = authorizationSlice.actions;

export const Settings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showEditDrawer, setShowEditDrawer] = useState(false);

  const { currentUser } = useAppSelector((state) => state.authorizationReducer);
  const { login, name, avatar, day, lastName, gender, month, phone, sureName, year } = currentUser;

  const userData = useMemo(
    () => [
      { key: t('user_name'), value: name },
      { key: t('last_name'), value: lastName },
      { key: t('sure_name'), value: sureName },
      { key: t('phone'), value: `(+373) ${phone}` },
      { key: t('birthday'), value: `${day}.${month}.${year}г.` },
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

  const showSettings = () => {
    console.log('Settings');
  };
  const showEditUserInfo = () => {
    setShowEditDrawer(true);
  };
  const closeEditUserInfo = () => {
    setShowEditDrawer(false);
  };

  return (
    <div className={s.Settings}>
      <EditUserInformationDrawer
        showEditDrawer={showEditDrawer}
        closeEditUserInfo={closeEditUserInfo}
      />

      <div className={s.header}>
        <div className={s.title}>{t('personal_area')}</div>

        <Button onClick={logOut} type='primary' className={s.logOut}>
          {t('log_out')}
        </Button>
      </div>

      <div className={s.userCard}>
        <Card
          className={s.card}
          cover={
            <div
              className={s.cover}
              style={{
                background: `url(${avatar}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            />
          }
          style={{ width: '40em', marginTop: 16 }}
          actions={[
            <SettingOutlined key='setting' onClick={showSettings} />,
            <EditOutlined key='edit' onClick={showEditUserInfo} />,
            <EllipsisOutlined key='ellipsis' />,
          ]}
        >
          <table className={s.table}>
            <tbody>
              {userData.map((el, index) => (
                <tr key={index} className={s.tableWrapper}>
                  <td className={s.tableLabelWrapper}>
                    <div className={s.tableLabel}>{el.key}</div>
                  </td>

                  <td className={s.tableValueWrapper}>
                    <div className={s.tableValue}>{el.value}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};
