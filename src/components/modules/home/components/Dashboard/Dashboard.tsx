import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReportsWidget } from '../Widgets/ReportsWidget';
import { InvoiceWidget } from '../Widgets/InvoiceWidget';
import { DraftWidget } from '../Widgets/DraftsWidget';
import { TemplatesWidget } from '../Widgets/TemplatesWidget';
import { PageHeader } from '../../../../common/components/PageHeader/PageHeader';

import s from './Dashboard.module.scss';

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className={s.Dashboard}>
      <PageHeader breadcrumb={[t('dashboard')]} title={t('dashboard')} />

      <div className={s.content}>
        <ReportsWidget />

        <InvoiceWidget />

        <DraftWidget />

        <TemplatesWidget />
      </div>
    </div>
  );
};
