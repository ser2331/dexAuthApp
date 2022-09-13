import React, { FC } from 'react';
import { Breadcrumb, Button } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { appSlice } from '../../../modules/app/AppSlice';
import { useAppDispatch, useAppSelector } from '../../../core/redux';

import Types from '../../../types';

import s from './PageHeader.module.scss';

const { appSizesMap } = Types;

interface IPageHeader {
  breadcrumb?: string[];
  title: string;
  width?: number | string;
}

const { setShowMobileMenu } = appSlice.actions;

export const PageHeader: FC<IPageHeader> = ({ breadcrumb, title, width }) => {
  const dispatch = useAppDispatch();

  const { size, showMobileMenu } = useAppSelector((state) => state.appReducer);
  const isMobile = size === appSizesMap.get('mobile').key;
  const isTablet = size === appSizesMap.get('tablet').key;

  return (
    <div className={s.PageHeader} style={{ width: width }}>
      {isMobile || isTablet ? (
        <Button
          className={s.showMenuBtn}
          onClick={() => dispatch(setShowMobileMenu(!showMobileMenu))}
        >
          <MenuUnfoldOutlined />
        </Button>
      ) : (
        ''
      )}
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumb?.length &&
          breadcrumb.map((el, index) => <Breadcrumb.Item key={index}>{el}</Breadcrumb.Item>)}
      </Breadcrumb>
      <div className={s.title}>{title}</div>
    </div>
  );
};
