import React from 'react';
import { Button, Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { IReportsData } from '../../../interfaces/interfaces';

import s from './ReportCardMobile.module.scss';

export const ReportCardMobile = ({
  item,
  columns,
  onClick,
}: {
  item: IReportsData;
  columns: { title: string; dataIndex: string }[];
  onClick?: () => void;
}) => {
  return (
    <Card
      className={s.ReportCardMobile}
      style={{ margin: '0 8px 24px 8px', borderRadius: 24, minWidth: 200 }}
      bodyStyle={{ background: '#FFFFFF', borderRadius: 24 }}
    >
      <div className={s.body}>
        <div className={s.title}>{item.description}</div>

        <table style={{ display: 'flex', justifyContent: 'space-around' }}>
          <thead>
            {columns?.slice(1, 5).map((el: { title: string; dataIndex: string }) => (
              <tr key={el.dataIndex}>
                <td>{el?.title}</td>
              </tr>
            ))}
          </thead>

          <tbody>
            <tr>
              <td>{item.category}</td>
            </tr>
            <tr>
              <td>{item.amount}</td>
            </tr>
            <tr>
              <td>{item.expectedPrice}$</td>
            </tr>
            <tr>
              <td>{item.price}$</td>
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
