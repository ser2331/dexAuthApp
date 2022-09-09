import React, { FC } from 'react';
import { Breadcrumb, Layout, Tabs } from 'antd';
import { IData, IFunc } from '../../interfaces/interfaces';

import s from './CustomContentWrapper.module.scss';

export const CustomContentWrapper: FC<IData & IFunc> = (data, onChangeTab) => {
  const { title, extra, items, breadcrumb } = data;

  return (
    <Layout
      className={s.CustomContentWrapper}
      style={{ padding: '0 4px 24px', minHeight: '100vh' }}
    >
      <div className={s.header}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {breadcrumb?.map((el, index) => (
            <Breadcrumb.Item key={index}>{el}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div className={s.title}>{title}</div>
      </div>
      <Tabs
        style={{ width: '100%', border: 'none', margin: '-70px 15px 0' }}
        onChange={onChangeTab}
        tabBarExtraContent={extra}
        items={items}
      />
    </Layout>
  );
};
