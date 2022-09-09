import React, { FC, useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../core/redux';
import { homeSlice } from '../../../HomeSlice';
import { IItem } from '../../../interfaces/interfaces';

import s from './AddBankAccount.module.scss';

const { setBankAccountsData } = homeSlice.actions;

interface IAddInvoiceForm {
  onClose: () => void;
}

export const AddBankAccount: FC<IAddInvoiceForm> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { invoicesData, keyBankAccountsData } = useAppSelector((state) => state.homeReducer);
  const isEdit = invoicesData[0].find((el) => el.key === keyBankAccountsData);

  const onFinish = useCallback(
    (values: IItem) => {
      const newItem = { ...values, key: keyBankAccountsData };

      if (isEdit) {
        const newData = invoicesData[0].filter((el) => el.key !== keyBankAccountsData);
        dispatch(setBankAccountsData([newItem, ...newData]));
      } else {
        dispatch(setBankAccountsData([newItem, ...invoicesData[0]]));
      }
      onClose();
    },
    [invoicesData, keyBankAccountsData]
  );

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        name: isEdit.name,
        accountNumber: isEdit.accountNumber,
        address: isEdit.address,
        amountFunds: isEdit.amountFunds,
      });
    } else form.resetFields();
  }, [isEdit]);

  return (
    <div className={s.AddInvoiceForm}>
      <Form
        form={form}
        className={s.Form}
        name='add_invoice'
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
        requiredMark={false}
      >
        <Form.Item
          label={t('name_bank')}
          name='name'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('account_number')}
          name='accountNumber'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('address')}
          name='address'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('amount_funds')}
          name='amountFunds'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <Input />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          {t('add_invoice')}
        </Button>
      </Form>
    </div>
  );
};
