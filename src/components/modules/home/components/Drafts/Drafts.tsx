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
        Add new Draft
      </Button>
    ),
    tabList: [
      {
        key: 'draft1',
        tab: 'draft1',
      },
      {
        key: 'draft2',
        tab: 'draft2',
      },
      {
        key: 'draft3',
        tab: 'draft3',
      },
    ],
    contentList: {
      draft1: <p>draft1</p>,
      draft2: <p>draft2</p>,
      draft3: <p>draft3</p>,
    },
  };
};

export const Drafts = () => {
  const { t } = useTranslation();
  const title = t('drafts');
  const breadcrumb = [t('documents'), t('drafts')];

  return CustomContentWrapper(data(title, breadcrumb));
};
