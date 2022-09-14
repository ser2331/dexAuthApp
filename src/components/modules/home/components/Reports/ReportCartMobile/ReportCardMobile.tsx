import React from 'react';
import { Button, Card } from 'antd';

import s from './ReportCardMobile.module.scss';
import { DownloadOutlined } from '@ant-design/icons';

export const ReportCardMobile = ({
  data,
  columns,
  onClick,
}: {
  data: any;
  columns: any;
  onClick?: () => void;
}) => {
  return (
    <Card
      className={s.ReportCardMobile}
      style={{ margin: '0 8px 24px 8px', borderRadius: 24, minWidth: 200 }}
      bodyStyle={{ background: '#FFFFFF', borderRadius: 24 }}
      loading={!data}
    >
      <div>
        <div className={s.title}>{data.description}</div>

        <table style={{ display: 'flex', justifyContent: 'space-between' }}>
          <thead>
            {columns?.slice(1, 5).map((el: { title: string; dataIndex: string }) => (
              <tr key={el.dataIndex}>
                <td>{el?.title}</td>
              </tr>
            ))}
          </thead>

          <tbody>
            <tr>
              <td>{data.category}</td>
            </tr>
            <tr>
              <td>{data.amount}</td>
            </tr>
            <tr>
              <td>{data.expectedPrice}$</td>
            </tr>
            <tr>
              <td>{data.price}$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={s.footer}>
        <div className={s.music}>Музыка</div>

        <Button type='primary' shape='round' onClick={onClick} icon={<DownloadOutlined />} />
      </div>
    </Card>
  );
};
