import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';

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
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ],
  contentList: {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  },
};

export const Invoices = () => CustomContentWrapper(documentsData);
