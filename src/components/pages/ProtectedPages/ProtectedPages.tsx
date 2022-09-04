import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../core/redux';
import { homeSlice } from '../../modules/home/HomeSlice';
import { HomeRoutes } from '../../modules/home/components/HomeRoutes/HomeRoutes';
import { items } from '../../modules/home/halpers/halpers';

import s from './ProtectedPages.module.scss';

const { Sider } = Layout;
const { setPressedLocation } = homeSlice.actions;

export const ProtectedPages = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const { pressedLocation } = useAppSelector(state => state.homeReducer);

    const onClick: MenuProps['onClick'] = (e) => {
        dispatch(setPressedLocation(e.key));
        navigate(e.keyPath.reverse().join('/'));
    };

    useEffect (() => {
        navigate('/dashboard')
        dispatch(setPressedLocation('dashboard'));
    }, [])

    return (
        <Layout className={s.ProtectedPages}>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    onClick={onClick}
                    defaultSelectedKeys={['dashboard']}
                    selectedKeys={[pressedLocation]}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items}
                />
            </Sider>

            <HomeRoutes />
        </Layout>
    );
};