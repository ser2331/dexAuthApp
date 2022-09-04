import React from 'react';
import {
    FileDoneOutlined,
    InfoCircleOutlined,
    PieChartOutlined,
    RiseOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export const items: MenuItem[] = [
    getItem('Dashboard', 'dashboard', <PieChartOutlined  />),
    getItem('Reports', 'reports', <RiseOutlined  />),
    getItem('Invoices', 'documents', <FileDoneOutlined  />, [
        getItem('Invoices', 'invoices'),
        getItem('Drafts', 'drafts'),
        getItem('Templates', 'templates'),
    ]),
    getItem('Customers', 'customers', <UserOutlined  />, [
        getItem('Customers 1', '1'),
        getItem('Customers 2', '2')
    ]),
    getItem('Settings', 'settings', <SettingOutlined  />),
    getItem('Help & Contact', 'help', <InfoCircleOutlined  />),
];