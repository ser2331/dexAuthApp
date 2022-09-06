import React, { FC, useState } from 'react';
import { Breadcrumb, Card, Layout } from 'antd';
import { IData } from '../../interfaces/interfaces';

const { Content } = Layout;

import s from './CustomContentWrapper.module.scss';

export const CustomContentWrapper: FC<IData> = (data) => {
  const { title, extra, tabList, contentList, breadcrumb } = data;

  const [activeTabKey, setActiveTabKey] = useState<string>(tabList[0].key);

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const content = contentList[activeTabKey];
  return (
    <Layout
      className={s.CustomContentWrapper}
      style={{ padding: '0 4px 24px', minHeight: '100vh' }}
    >
      <Card
        style={{ width: '100%', border: 'none' }}
        title={
          <>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadcrumb?.map((el, index) => (
                <Breadcrumb.Item key={index}>{el}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
            <div
              style={{
                font: '600 20px/28px SF Pro Display, sans-serif',
              }}
            >
              {title}
            </div>
          </>
        }
        extra={extra}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
      >
        <Content className={s.siteLayoutBackground} style={{ minHeight: 280 }}>
          {content}
        </Content>
      </Card>
    </Layout>
  );
};
