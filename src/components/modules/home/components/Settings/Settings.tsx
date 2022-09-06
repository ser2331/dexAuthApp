import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { useAppDispatch } from '../../../../core/redux';
import { routes } from '../../../../types';

import s from './Settings.module.scss';

const { setIsAuth } = authorizationSlice.actions;

export const Settings = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    window.localStorage && window.localStorage.setItem('LOGIN', JSON.stringify(''));
    window.localStorage && window.localStorage.setItem('PASSWORD', JSON.stringify(''));
    dispatch(setIsAuth(false));
    navigate(routes.login);
  };

  return (
    <div className={s.Settings}>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};
