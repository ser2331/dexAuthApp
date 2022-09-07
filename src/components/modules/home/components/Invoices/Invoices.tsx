import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { BankAccounts } from '../BankAccounts/BankAccounts';
import { InternetAccounts } from '../InternetAccounts/InternetAccounts';

const documentsData = {
  title: 'Invoices',
  breadcrumb: ['Documents', 'Invoices'],
  extra: (
    <Button type='primary' style={{ bottom: '-60px' }}>
      Add new Invoice
    </Button>
  ),
  tabList: [
    {
      key: 'BankAccounts',
      tab: 'Bank Accounts',
    },
    {
      key: 'InternetAccounts',
      tab: 'Internet Accounts',
    },
  ],
  contentList: {
    BankAccounts: <BankAccounts />,
    InternetAccounts: <InternetAccounts />,
  },
};

export const Invoices = () => CustomContentWrapper(documentsData);
