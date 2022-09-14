import React, { useCallback, useEffect } from 'react';
import { Drawer, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../core/redux';
import { homeSlice } from '../../modules/home/HomeSlice';
import { appSlice } from '../../modules/app/AppSlice';
import { HomeRoutes } from '../../modules/home/components/HomeRoutes/HomeRoutes';
import { items } from '../../modules/home/halpers/halpers';
import Types, { routes } from '../../types';

import s from './ProtectedPages.module.scss';

const { Sider } = Layout;
const { setPressedLocation } = homeSlice.actions;
const { setShowMobileMenu } = appSlice.actions;
const { appSizesMap } = Types;

export const ProtectedPages = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { pressedLocation, customers } = useAppSelector((state) => state.homeReducer);
  const { size, showMobileMenu } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;
  const isTablet = size === appSizesMap.get('tablet').key;

  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setPressedLocation(e.key));
    navigate(e.keyPath.reverse().join('/'));
  };

  const closeMenu = useCallback(() => {
    dispatch(setShowMobileMenu(false));
  }, [dispatch]);

  useEffect(() => {
    navigate(routes.dashboard);
    dispatch(setPressedLocation('dashboard'));
  }, [dispatch]);

  const renderDesktopMenu = () => (
    <Sider width={200} className={s.siteLayoutBackground}>
      <Menu
        mode='inline'
        onClick={onClick}
        defaultSelectedKeys={['dashboard']}
        selectedKeys={[pressedLocation]}
        style={{ height: '100%', borderRight: 0 }}
        items={items(customers)}
      />
    </Sider>
  );

  const renderMobileMenu = () => (
    <Drawer
      width={isMobile ? 164 : 248}
      contentWrapperStyle={{ padding: 0 }}
      className={'MobileMenu'}
      title='Menu'
      placement='left'
      onClose={closeMenu}
      open={showMobileMenu}
    >
      <Menu
        mode='inline'
        onClick={onClick}
        defaultSelectedKeys={['dashboard']}
        selectedKeys={[pressedLocation]}
        style={{ height: '100%', borderRight: 0 }}
        items={items(customers)}
      />
    </Drawer>
  );

  return (
    <Layout className={s.ProtectedPages}>
      {isTablet || isMobile ? renderMobileMenu() : renderDesktopMenu()}

      <HomeRoutes />
    </Layout>
  );
};
