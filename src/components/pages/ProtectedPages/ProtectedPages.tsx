import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../core/redux';
import { homeSlice } from '../../modules/home/HomeSlice';
import { HomeRoutes } from '../../modules/home/components/HomeRoutes/HomeRoutes';
import { items } from '../../modules/home/halpers/halpers';
import Types from '../../types';

import s from './ProtectedPages.module.scss';

const { Sider } = Layout;
const { setPressedLocation } = homeSlice.actions;
const { routingMap } = Types;

export const ProtectedPages = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const { pressedLocation } = useAppSelector(state => state.homeReducer);

    const onClick: MenuProps['onClick'] = (e) => {
        dispatch(setPressedLocation(e.key));
        navigate(e.keyPath.reverse().join('/'));
    };

    useEffect (() => {
        navigate(routingMap.get('dashboard').value)
        dispatch(setPressedLocation(routingMap.get('dashboard').key));
    }, [])

    return (
        <Layout className={s.ProtectedPages}>
            <Sider width={200} className={s.siteLayoutBackground}>
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