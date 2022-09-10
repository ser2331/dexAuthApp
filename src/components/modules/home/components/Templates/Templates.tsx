import React from 'react';
import { Button } from 'antd';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { useTranslation } from 'react-i18next';
import { Rest } from '../Rest/Rest';
import { Entertainment } from '../Entertainment/Entertainment';

const data = (
  title: string,
  breadcrumb: string[],
  tabs: string[],
  buttonTitle: string,
  addTemplates: () => void
) => {
  return {
    title: title,
    breadcrumb: breadcrumb,
    extra: (
      <Button type='primary' style={{ right: 50 }} onClick={addTemplates}>
        {buttonTitle}
      </Button>
    ),
    items: [
      {
        label: tabs[0],
        key: 'schedule_relax',
        children: (
          <div style={{ minHeight: 280 }}>
            <Rest />
          </div>
        ),
      },
      {
        label: tabs[0],
        key: 'schedule_entertainment',
        children: (
          <div style={{ minHeight: 280 }}>
            <Entertainment />
          </div>
        ),
      },
    ],
  };
};

export const Templates = () => {
  const { t } = useTranslation();
  const title = t('templates');
  const breadcrumb = [t('documents'), t('templates')];
  const tabs = [t('schedule_relax'), t('schedule_entertainment')];
  const buttonTitle = t('add_invoice');

  const addTemplates = () => {
    console.log('hi');
  };

  return CustomContentWrapper(data(title, breadcrumb, tabs, buttonTitle, addTemplates));
};
