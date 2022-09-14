import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { IItem } from '../../../interfaces/interfaces';

import s from './AccountCardMobile.module.scss';

export const AccountCardMobile = ({
  item,
  columns,
  onEdit,
}: {
  item: IItem;
  columns: { title: string; dataIndex: string; width?: string; editable?: boolean }[];
  onEdit: (e: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className={s.AccountCardMobile}>
      <div className={s.content}>
        <div className={s.title}>{item.name}</div>

        <table style={{ display: 'flex', justifyContent: 'space-around' }}>
          <thead className={s.tHead}>
            {columns.slice(1, 4).map((el) => (
              <tr key={el.dataIndex}>
                <td>{el.title}</td>
              </tr>
            ))}
          </thead>

          <tbody className={s.tBody}>
            <tr>
              <td>{item.accountNumber}</td>
            </tr>
            <tr>
              <td>{item.address}</td>
            </tr>
            <tr>
              <td>{item.amountFunds}$</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={s.footer}>
        <Button onClick={() => onEdit(item.key)} type='primary'>
          {t('edit')}
        </Button>
      </div>
    </div>
  );
};
