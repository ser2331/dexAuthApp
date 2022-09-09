import React, { useCallback, useMemo } from 'react';
import { Form, Table, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { useTranslation } from 'react-i18next';
import { homeSlice } from '../../HomeSlice';
import { IItem } from '../../interfaces/interfaces';

import s from './BankAccounts.module.scss';

const { setBankAccountsData, setKeyBankAccountsData } = homeSlice.actions;

export const BankAccounts = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { invoicesData, keyBankAccountsData } = useAppSelector((state) => state.homeReducer);

  const data = useMemo(() => invoicesData[0], [invoicesData]);

  const edit = useCallback((key: string) => {
    dispatch(setKeyBankAccountsData(key));
  }, []);

  const cancel = useCallback(() => {
    dispatch(setKeyBankAccountsData(''));
  }, []);

  const columns = useMemo(
    () => [
      {
        title: t('nameBank'),
        dataIndex: 'name',
        width: '15%',
        editable: true,
      },
      {
        title: t('account_number'),
        dataIndex: 'accountNumber',
        width: '15%',
        editable: true,
      },
      {
        title: t('address'),
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: t('amount_funds'),
        dataIndex: 'amountFunds',
        width: '15%',
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (_: '@typescript-eslint/no-explicit-any', record: IItem) => {
          return (
            <Typography.Link disabled={keyBankAccountsData !== ''} onClick={() => edit(record.key)}>
              {t('edit')}
            </Typography.Link>
          );
        },
      },
    ],
    []
  );

  return (
    <div className={s.BankAccounts}>
      <Form form={form} component={false}>
        <Table
          bordered
          dataSource={data}
          columns={columns}
          rowClassName='editable-row'
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};
