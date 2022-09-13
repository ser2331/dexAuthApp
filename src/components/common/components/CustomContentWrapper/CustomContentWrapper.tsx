import React, { FC } from 'react';
import { useAppSelector } from '../../../core/redux';
import { Alert, Layout, Tabs } from 'antd';
import { IData, IFunc } from '../../interfaces/interfaces';
import { PageHeader } from '../PageHeader/PageHeader';

import s from './CustomContentWrapper.module.scss';

export const CustomContentWrapper: FC<IData & IFunc> = (data, onChangeTab) => {
  const { title, extra, items, breadcrumb } = data;

  const { alertMessage } = useAppSelector((state) => state.homeReducer);

  return (
    <Layout className={s.CustomContentWrapper} style={{ minHeight: '100vh' }}>
      <PageHeader breadcrumb={breadcrumb} title={title} />

      {alertMessage.message && (
        <Alert className={s.alert} message={alertMessage.message} type={alertMessage.type} />
      )}

      <Tabs
        style={{ border: 'none', margin: '-70px 24px 0' }}
        onChange={onChangeTab}
        tabBarExtraContent={extra}
        items={items}
      />
    </Layout>
  );
};
