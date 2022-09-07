import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { BankAccounts } from '../BankAccounts/BankAccounts';
import { InternetAccounts } from '../InternetAccounts/InternetAccounts';
import { useTranslation } from 'react-i18next';

const documentsData = (title: string, breadcrumb: string[], tabs: string[]) => {
  return {
    title: title,
    breadcrumb: breadcrumb,
    extra: (
      <Button type='primary' style={{ bottom: '-60px' }}>
        Add new Invoice
      </Button>
    ),
    tabList: [
      {
        key: 'BankAccounts',
        tab: tabs[0],
      },
      {
        key: 'InternetAccounts',
        tab: tabs[1],
      },
    ],
    contentList: {
      BankAccounts: <BankAccounts />,
      InternetAccounts: <InternetAccounts />,
    },
  };
};

export const Invoices = () => {
  const { t } = useTranslation();
  const title = t('invoices');
  const breadcrumb = [t('documents'), t('invoices')];
  const tabs = [t('bank_accounts'), t('internet_accounts')];

  return CustomContentWrapper(documentsData(title, breadcrumb, tabs));
};
