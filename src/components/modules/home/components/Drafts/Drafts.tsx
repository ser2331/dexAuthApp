import React from 'react';
import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
import { useTranslation } from 'react-i18next';
import { Planning } from '../Planning/Planning';
import { AddChallenge } from '../AddChallenge/AddChallenge';

const data = (title: string, breadcrumb: string[], tabs: string[]) => {
  return {
    title: title,
    breadcrumb: breadcrumb,
    tabList: [
      {
        key: 'draft1',
        tab: tabs[0],
      },
      {
        key: 'draft2',
        tab: tabs[1],
      },
    ],
    contentList: {
      draft1: <Planning />,
      draft2: <AddChallenge />,
    },
  };
};

export const Drafts = () => {
  const { t } = useTranslation();
  const title = t('drafts');
  const breadcrumb = [t('documents'), t('drafts')];
  const tabs = [t('planning'), t('add_new_challenge')];

  return CustomContentWrapper(data(title, breadcrumb, tabs));
};
