import { CardTabListType } from 'antd/es/card';
import React from 'react';

export interface IData {
  title: string;
  extra?: JSX.Element;
  tabList: { key: string; tab: string }[] & CardTabListType[];
  contentList: Record<string, React.ReactNode>;
  breadcrumb?: string[];
}
