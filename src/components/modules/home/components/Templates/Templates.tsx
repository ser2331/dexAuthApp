import React from 'react';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { useTranslation } from 'react-i18next';
import { Rest } from '../Rest/Rest';
import { Entertainment } from '../Entertainment/Entertainment';

const data = (title: string, breadcrumb: string[], tabs: string[]) => {
  return {
    title: title,
    breadcrumb: breadcrumb,
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

  return CustomContentWrapper(data(title, breadcrumb, tabs));
};
