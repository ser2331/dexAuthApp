import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { useTranslation } from 'react-i18next';
import { Rest } from '../Rest/Rest';
import { Entertainment } from '../Entertainment/Entertainment';

const data = (title: string, breadcrumb: string[], tabs: string[]) => {
  return {
    title: title,
    breadcrumb: breadcrumb,
    extra: (
      <Button type='primary' style={{ bottom: '-60px' }}>
        Add new Template
      </Button>
    ),
    tabList: [
      {
        key: 'schedule',
        tab: tabs[0],
      },
      {
        key: 'entertainment',
        tab: tabs[1],
      },
      {
        key: 'Template3',
        tab: 'Template3',
      },
    ],
    contentList: {
      schedule: <Rest />,
      entertainment: <Entertainment />,
      Template3: <p>Template3</p>,
    },
  };
};

export const Templates = () => {
  const { t } = useTranslation();
  const title = t('templates');
  const breadcrumb = [t('documents'), t('templates')];
  const tabs = [t('schedule_relax'), t('schedule_entertainment')];

  return CustomContentWrapper(data(title, breadcrumb, tabs));
};
