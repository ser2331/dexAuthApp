import React from 'react';
import { Button } from 'antd';

import { CustomContentWrapper } from '../../../../common/components/CustomContentWrapper/CustomContentWrapper';
const data = {
    title: 'Drafts',
    breadcrumb: ['Documents', 'Drafts'],
    extra: <Button type='primary' style={{ bottom: '-60px' }} >Add new Draft</Button>,
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
    ] ,
    contentList: {
        draft1: <p>draft1</p>,
        draft2: <p>draft2</p>,
        draft3: <p>draft3</p>,
    },

};
export const Drafts = () => CustomContentWrapper(data);