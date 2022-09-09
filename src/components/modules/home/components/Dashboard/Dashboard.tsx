import React from 'react';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { ReportsWidget } from '../Widgets/ReportsWidget';
import { InvoiceWidget } from '../Widgets/InvoiceWidget';

import s from './Dashboard.module.scss';
import { DraftWidget } from '../Widgets/DraftsWidget';
import { TemplatesWidget } from '../Widgets/TemplatesWidget';

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className={s.Dashboard}>
      <div className={s.header}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>{t('dashboard')}</Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.title}>{t('dashboard')}</div>
      </div>

      <div className={s.content}>
        <ReportsWidget />

        <InvoiceWidget />

        <DraftWidget />

        <TemplatesWidget />
      </div>
    </div>
  );
};
