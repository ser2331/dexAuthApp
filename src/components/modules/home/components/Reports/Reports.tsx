import React from 'react';
import { Breadcrumb, Table } from 'antd';
import { useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import Types from '../../../../types';

import s from './Reports.module.scss';

const { reportsTableColumns } = Types;

export const Reports = () => {
  const { t } = useTranslation();

  const { reportsData } = useAppSelector((state) => state.homeReducer);

  return (
    <div className={s.Reports}>
      <div className={s.header}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{t('reports')}</Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.title}>{t('reports')}</div>
      </div>

      <Table
        className={s.tableWrapper}
        columns={reportsTableColumns}
        dataSource={reportsData}
        bordered
      />
    </div>
  );
};
