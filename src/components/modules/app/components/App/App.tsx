import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { authorizationSlice } from '../../../authorization/AuthorizationSlice';
import { UnprotectedPages } from '../../../../pages/UnprotectedPages/UnprotectedPages';
import { ProtectedPages } from '../../../../pages/ProtectedPages/ProtectedPages';
import Types, { routes } from '../../../../types';
import { ChangeLang } from '../ChangeLang/ChangeLang';
import { appSlice } from '../../AppSlice';

import s from './App.module.scss';

const { setIsAuth, setUser } = authorizationSlice.actions;
const { setShowLangMenu, setSize } = appSlice.actions;
const { appSizesMap } = Types;

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { arrayUsers } = useAppSelector((state) => state.authorizationReducer);
  const { isAuth } = useAppSelector((state) => state.authorizationReducer);
  const { showLangMenu } = useAppSelector((state) => state.appReducer);

  let login = '';
  let password = '';
  const loginJson = window.localStorage && window.localStorage.getItem('LOGIN');
  const passwordJson = window.localStorage && window.localStorage.getItem('PASSWORD');

  if (typeof loginJson === 'string' && typeof passwordJson === 'string') {
    try {
      login = JSON.parse(loginJson);
      password = JSON.parse(passwordJson);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }

  useEffect(() => {
    if (!isAuth) {
      navigate(routes.login);
    }
  }, [isAuth]);

  useEffect(() => {
    if (login && password) {
      const userAdmin = arrayUsers.find((el) => el.login === login && el.password === password);
      if (userAdmin) {
        dispatch(setUser(userAdmin));
        dispatch(setIsAuth(true));
      }
    }
    return;
  }, [login, password, arrayUsers]);

  useEffect(() => {
    const getSizeKey = () => {
      const size = document.documentElement.clientWidth;
      if (size < appSizesMap.get('tablet').size) return appSizesMap.get('mobile').key;
      if (size >= appSizesMap.get('tablet').size && size < appSizesMap.get('desktop').size)
        return appSizesMap.get('tablet').key;
      if (size >= appSizesMap.get('desktop').size) return appSizesMap.get('desktop').key;
      return appSizesMap.get('desktop').key;
    };

    const onResize = () => {
      const sizeKey = getSizeKey();
      dispatch(setSize(sizeKey));
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [dispatch]);

  return (
    <div className={s.App}>
      {showLangMenu && <ChangeLang />}
      <div className='mouseMove' onMouseMove={() => dispatch(setShowLangMenu(true))} />
      {isAuth ? <ProtectedPages /> : <UnprotectedPages />}
    </div>
  );
};
