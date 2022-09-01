import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeRoutes } from '../../modules/homeTables/components/HomeRoutes/HomeRoutes';
import { items } from '../../modules/homeTables/halpers/halpers';
import s from './HomePage.module.scss';

const { Content, Sider } = Layout;

export const HomePage = () => {
    const navigate = useNavigate();



    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.keyPath.reverse().join('/'));
    };

    return (
        <Layout className={s.HomePage}>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <HomeRoutes />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}