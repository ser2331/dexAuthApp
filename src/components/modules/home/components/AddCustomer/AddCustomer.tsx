import React, { FC } from 'react';
import { Button, Col, Divider, Drawer, Form, Input, InputNumber, Row, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../../core/redux';
import { homeSlice } from '../../HomeSlice';
import { genderOptions, monthOptions, yearOptions } from '../../../authorization/halpers/halpers';
import { ICustomers } from '../../../authorization/interfaces/authorizationInterface';

import s from '../EditUserInformationDrawer/EditUserInformationDrawer.module.scss';

const { setCustomer } = homeSlice.actions;
const { Option } = Select;

interface IAddCustomer {
  showDrawer: boolean;
  onCloseDrawer: () => void;
  isMobile: boolean;
}

export const AddCustomer: FC<IAddCustomer> = ({ showDrawer, onCloseDrawer, isMobile }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values: ICustomers) => {
    dispatch(setCustomer({ ...values, key: Math.random().toString(), isAdmin: false }));
    form.resetFields();
    onCloseDrawer();
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Drawer
      title={t('add_customer')}
      placement='right'
      onClose={onCloseDrawer}
      open={showDrawer}
      width={isMobile ? 240 : ''}
    >
      <Form
        form={form}
        className={s.Form}
        name='AddCustomer'
        style={{ height: '-webkit-fill-available' }}
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
      >
        <div>
          <Form.Item
            name='sureName'
            label={t('surname')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('surname')} />
          </Form.Item>

          <Form.Item
            name='name'
            label={t('name')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('name')} />
          </Form.Item>

          <Form.Item
            name='lastName'
            label={t('middle_name')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('middle_name')} />
          </Form.Item>

          <Form.Item
            name='login'
            label={t('logIn')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('logIn')} />
          </Form.Item>

          <Form.Item
            name='password'
            label={t('password')}
            rules={[
              { required: true, message: t('required_field') },
              { max: 20, message: t('max_characters_20') },
            ]}
          >
            <Input placeholder={t('password')} />
          </Form.Item>

          <div>{t('date_of_birth')}</div>

          <Row gutter={12}>
            <Col span={8}>
              <Form.Item
                name='day'
                rules={[
                  { required: true, message: t('required_field') },
                  { type: 'number', max: 31, min: 1 },
                ]}
              >
                <InputNumber style={{ width: '100%' }} min={1} max={31} placeholder={t('day')} />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                className={s.month}
                name='month'
                rules={[{ required: true, message: t('required_field') }]}
              >
                <Select placeholder={t('month')}>
                  {monthOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item name='year' rules={[{ required: true, message: t('required_field') }]}>
                <Select placeholder={t('year')}>
                  {yearOptions().map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name='phone'
            label={t('phone')}
            rules={[{ required: true, message: t('number_not_exist') }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              formatter={(value?: number | string) => (value ? value.toString().slice(0, 8) : '')}
              addonBefore='(+373)'
              placeholder={t('phone')}
            />
          </Form.Item>

          <Form.Item
            name='gender'
            label={t('gender')}
            rules={[{ required: true, message: t('required_field') }]}
          >
            <Select placeholder={t('floor')}>
              {genderOptions.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>

        <div className={s.formFooter}>
          <Divider />

          <div className={s.btnWrapper}>
            <Button className={s.reset} onClick={onReset}>
              {t('cancellation')}
            </Button>

            <Button className={s.submit} type='primary' htmlType='submit'>
              {t('save')}
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  );
};
