import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { useTranslation } from 'react-i18next';

const data = (title: string, breadcrumb: string[]) => {
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
        key: 'Template1',
        tab: 'Template1',
      },
      {
        key: 'Template2',
        tab: 'Template2',
      },
      {
        key: 'Template3',
        tab: 'Template3',
      },
    ],
    contentList: {
      Template1: <p>Template1</p>,
      Template2: <p>Template2</p>,
      Template3: <p>Template3</p>,
    },
  };
};

export const Templates = () => {
  const { t } = useTranslation();
  const title = t('templates');
  const breadcrumb = [t('documents'), t('templates')];

  return CustomContentWrapper(data(title, breadcrumb));
};
