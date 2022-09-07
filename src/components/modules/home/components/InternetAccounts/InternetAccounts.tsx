import React, { useCallback, useMemo, useState } from 'react';
import { Form, Popconfirm, Table, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import { homeSlice } from '../../HomeSlice';
import { IItem } from '../../interfaces/interfaces';

import s from './InternetAccounts.module.scss';
import { EditableCell } from '../../halpers/halpers';

const { setInternetAccountsData } = homeSlice.actions;

export const InternetAccounts = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const { invoicesData } = useAppSelector((state) => state.homeReducer);
  const [editingKey, setEditingKey] = useState('');

  const data = useMemo(() => invoicesData[1], [invoicesData]);
  const isEditing = (record: IItem) => record.key === editingKey;

  const edit = useCallback((record: Partial<IItem> & { key: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.key);
  }, []);

  const cancel = useCallback(() => {
    setEditingKey('');
  }, []);

  const save = useCallback(async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as IItem;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        dispatch(setInternetAccountsData(newData));
        setEditingKey('');
      } else {
        newData.push(row);
        dispatch(setInternetAccountsData(newData));
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  }, []);

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'accountNumber',
      dataIndex: 'accountNumber',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'amountFunds',
      dataIndex: 'amountFunds',
      width: '20%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: '@typescript-eslint/no-explicit-any', record: IItem) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: IItem) => ({
        record,
        inputType: col.dataIndex === 'accountNumber' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className={s.BankAccounts}>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName='editable-row'
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};
