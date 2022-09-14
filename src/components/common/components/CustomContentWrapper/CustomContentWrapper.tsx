import React, { FC } from 'react';
import { useAppSelector } from '../../../core/redux';
import { Alert, Layout, Tabs } from 'antd';
import { IData, IFunc } from '../../interfaces/interfaces';
import { PageHeader } from '../PageHeader/PageHeader';
import Types from '../../../types';

import s from './CustomContentWrapper.module.scss';
const { appSizesMap } = Types;

export const CustomContentWrapper: FC<IData & IFunc> = (data, onChangeTab) => {
  const { title, extra, items, breadcrumb } = data;

  const { alertMessage } = useAppSelector((state) => state.homeReducer);
  const { size } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;

  return (
    <Layout className={s.CustomContentWrapper} style={{ minHeight: '100vh' }}>
      <PageHeader breadcrumb={breadcrumb} title={title} />

      {alertMessage.message && (
        <Alert className={s.alert} message={alertMessage.message} type={alertMessage.type} />
      )}

      <Tabs
        style={
          !isMobile
            ? { border: 'none', margin: '-70px 24px 0' }
            : { border: 'none', margin: '-30px 0 0' }
        }
        onChange={onChangeTab}
        tabBarExtraContent={extra}
        tabBarStyle={isMobile ? { background: '#FFFFFF' } : {}}
        items={items}
      />
    </Layout>
  );
};
