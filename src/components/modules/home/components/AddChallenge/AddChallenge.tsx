import React, { useMemo, useState } from 'react';
import { Button, Form, Input, Radio, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../core/redux';
import TextArea from 'antd/es/input/TextArea';
import { homeSlice } from '../../HomeSlice';
import { IPlanning } from '../../interfaces/interfaces';

import s from './AddChallenge.module.scss';

const { setNewChallenge } = homeSlice.actions;

export const AddChallenge = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [valueRadio, setValueRadio] = useState('average');

  const { draftsData } = useAppSelector((state) => state.homeReducer);
  const { planning } = draftsData;

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: IPlanning) => {
    const newChallenge = {
      ...values,
      key: Math.random().toString(),
      chosen: false,
      important: valueRadio,
    };
    dispatch(setNewChallenge(newChallenge));
    onReset();
  };

  const columns = useMemo(
    () => [
      {
        title: t('title_challenge'),
        dataIndex: 'title',
        width: '100%',
        editable: true,
        key: 'title',
      },
    ],
    [t]
  );

  return (
    <div className={s.AddChallenge}>
      <Form
        form={form}
        className={s.AddForm}
        name='basic'
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
        requiredMark={false}
      >
        <Form.Item
          label={t('title_challenge')}
          name='title'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t('description_challenge')}
          name='description'
          rules={[{ required: true, message: t('required_field') }]}
        >
          <TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
        </Form.Item>

        <Form.Item label={t('priority')} rules={[{ required: true, message: t('required_field') }]}>
          <Radio.Group onChange={(e) => setValueRadio(e.target.value)} value={valueRadio}>
            <Radio value='important'>{t('important')}</Radio>
            <Radio value='average'>{t('average')}</Radio>
            <Radio value='unimportant'>{t('unimportant')}</Radio>
          </Radio.Group>
        </Form.Item>

        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          {t('add_challenge')}
        </Button>
      </Form>

      <div className={s.listChallenge}>
        <Table
          pagination={{ pageSize: 5, size: 'small' }}
          bordered
          dataSource={planning}
          columns={columns}
        />
      </div>
    </div>
  );
};
